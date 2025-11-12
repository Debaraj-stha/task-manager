import Avatar from "../../../components/common/Avatar";
import { capitalize } from "../../../utils/utils";
import type { Member } from "../types/members";
import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
}

const username = "Bob Singh";

const MemberCard = ({ member }: { member: Member }) => (
  <div
    key={member.id}
    className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded-md text-sm text-gray-200"
  >
    <Avatar
      url={member.avatarUrl}
      alt={member.name}
      heightClass="h-6"
      widthClass="w-6"
    />
    <span>{member.name}</span>
  </div>
);

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const hasMembers = task.members && task.members.length > 0;

  // Find the current user and their accountable person
  const currentUser = task.members.find((m) => m.name === username);
  const accountableTo = currentUser?.accountableTo;

  return (
    <div className="p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition space-y-2 hover:scale-[1.02] cursor-pointer transition duration-150">
      {/* Task Header */}
      <h3 className="text-xl font-semibold text-blue-400 ">{task.name}</h3>
      <p className="text-sm text-gray-300 ">{task.description}</p>

      {/* Status & Priority */}
      <div className="text-sm  space-y-1">
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={
              task.status === "done"
                ? "text-green-400"
                : task.status === "in-progress"
                  ? "text-yellow-400"
                  : task.status === "review"
                    ? "text-blue-400"
                    : "text-gray-400"
            }
          >
            {capitalize(task.status)}
          </span>
        </p>
        <p>
          <span className="font-semibold">Priority:</span>{" "}
          <span
            className={
              task.priority === "high"
                ? "text-red-400"
                : task.priority === "medium"
                  ? "text-yellow-300"
                  : "text-gray-300"
            }
          >
            {task.priority ?? "N/A"}
          </span>
        </p>
      </div>

      {/* Members */}
      <div className="">
        <p className="font-semibold mb-1 text-sm text-gray-300">Members:</p>
        {hasMembers ? (
          <div className="flex flex-wrap gap-2">
            {task.members.map((member) => (
              <MemberCard member={member} key={member.id} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No members assigned</p>
        )}
      </div>

      {/* Accountable To */}
      <div className="">
        <p className="font-semibold mb-1 text-sm text-gray-300">
          Accountable To:
        </p>
        {accountableTo ? (
          <div className="flex items-center gap-2">
            <Avatar
              url={accountableTo.avatarUrl}
              alt={accountableTo.name}
              widthClass="w-6"
              heightClass="h-6"
            />
            <span className="text-sm">
              {accountableTo.name} ({accountableTo.position})
            </span>
          </div>
        ) : (
          <p className="text-sm text-gray-400 italic">No accountable member found</p>
        )}
      </div>
      {task.deadline && (
        <p className="text-sm text-gray-400">
          Deadline:{" "}
          <span
            className={
              new Date(task.deadline) < new Date() && task.status !== "done"
                ? "text-red-400 font-semibold"
                : "text-gray-200"
            }
          >
            {task.deadline.toDateString()}
          </span>
        </p>
      )}


      {/* Footer */}
      <div className="text-sm mt-3 text-gray-400 flex flex-col md:flex-row justify-between items-start md:items-center">
        <p>
          Created by:{" "}
          <span className="text-gray-200">{task.createdBy.name}</span>
        </p>
        {task.status === "done" && (
          <p>Completed At: {task.endDate.toDateString()}</p>
        )}
      </div>
    </div>
  );
};

export default TaskItem