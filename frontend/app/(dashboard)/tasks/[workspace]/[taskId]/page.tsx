'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent,  } from "@/components/ui/card";
import { tasks } from "@/constants/content/tasks/tasks";
import { getSubtasks } from "@/services/taskServices";
import { Member } from "@/types/members";
import { Comment, Task, } from "@/types/task";
import { capitalize } from "@/utils/helper";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";

const TaskPage = () => {
  const { taskId, workspace } = useParams<{ taskId?: string; workspace?: string }>();
  const router = useRouter();

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return (
      <div className="p-6 text-gray-600 italic">Task not found.</div>
    );
  }
  const subTasks = getSubtasks(task.id)

  const renderSubtasks = () => (
    <div className="mt-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-3">Subtasks</h3>
      <div className="space-y-3">
        {subTasks.length == 0 ?
          <h3>No associates subtasks to this task</h3>
          :
          subTasks.map((st: Task) => (
            <Card key={st.id} className="p-4 hover:shadow-lg transition-all"
              onClick={() => {
                console.log("clicking", task.parentTaskId, task)
                router.push(`${st.id}`)
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-blue-700">{st.name}</h4>
                <span className={`px-2 py-1 text-xs rounded transition 
                ${st.status === "done" ? "bg-green-100 text-green-800" :
                    st.status === "in-progress" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-600"}`}>
                  {capitalize(st.status)}
                </span>
              </div>
              <p className="text-gray-700 text-sm mb-2">{st.description}</p>
              {(st.members ?? []).length > 0 && (
                <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
                  {(st.members ?? []).map((m, index) => (
                    <span key={index} className="text-blue-600">@{m.name}</span>
                  ))}
                </div>
              )}
              {(st.comments ?? []).length > 0 && (
                <div className="mt-3 border-t pt-2 space-y-1">
                  {st.comments!.map(c => (
                    <p key={c.id} className="text-xs text-gray-600">
                      💬 <span className="font-medium text-gray-800">{c.by.name}:</span> {c.message}
                    </p>
                  ))}
                </div>
              )}
            </Card>
          ))}
      </div>
    </div>
  );

  const renderComments = () => (
    <div className="mt-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">Comments</h3>
      <div className="space-y-2">
        {task.comments?.map((c: Comment) => (
          <div key={c.id} className="border-l-4 border-blue-200 pl-3">
            <p className="text-sm">
              <span className="font-medium text-blue-700">{c.by.name}</span>: {c.message}
            </p>
            <p className="text-xs text-gray-400">
              {c.at.toLocaleDateString()} {c.at.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-gray-800 h-full overflow-y-auto">
      {/* Breadcrumb */}
      <div className="sticky top-0 z-20 flex items-center gap-1 px-6 py-3 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm text-blue-700">
        <Link href={`/tasks/${workspace}`} className="font-medium hover:text-blue-900 transition">
          {capitalize(workspace || "Workspace")}
        </Link>
        <BiChevronRight size={20} className="text-gray-500" />
        <span onClick={() => router.back()} className="cursor-pointer text-gray-600 hover:text-blue-800 transition">
          {task.name}
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-1">{task.name}</h2>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span>
              Created by <span className="font-medium text-blue-700">{task.createdBy.name}</span> on{" "}
              <span className="text-blue-700">{task.createdAt.toLocaleDateString()}</span>
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium hover:bg-blue-200 transition-all hover:scale-105">
              {capitalize(task.status)}
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
              Priority: {capitalize(task.priority ?? "NA")}
            </span>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">{task.description}</p>
        </div>

        {/* Members */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Assigned Members</h3>
          <div className="flex flex-wrap gap-3">
            {task.members.map((m: Member, index: number) => (
              <Card key={index} className="p-2 hover:shadow-lg transition-all max-h-44 w-32">
                <CardContent className="flex flex-col w-full items-start">
                  <div className="w-full flex justify-center mb-2">
                    <Avatar className="size-10 md:size-16">
                      <AvatarImage src={m.avatarUrl} />
                      <AvatarFallback>
                        {m.name.split(" ").map((w) => capitalize(w)![0]).splice(0, 2).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="text-sm font-medium truncate w-full">{m.name}</p>
                  <p className="text-xs text-gray-500 truncate w-full">{m.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subtasks */}
        {renderSubtasks()}

        {/* Comments */}
        {(task.comments ?? []).length > 0 && renderComments()}

        {/* Dates */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <p>Start: <span className="text-blue-700">{task.startDate.toLocaleDateString()}</span></p>
          <p>End: <span className="text-blue-700">{task.endDate.toLocaleDateString()}</span></p>
          {task.deadline && (
            <p>
              Deadline:{" "}
              <span className={`font-medium ${task.deadline < new Date() && task.status !== "done" ? "text-red-500" : "text-blue-700"}`}>
                {task.deadline.toLocaleDateString()}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
