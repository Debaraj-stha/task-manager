
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { capitalize } from "../../../utils/utils";
import { tasks } from "../../../constants/content/tasks/tasks";

const Task = () => {
  const { task_id, workspace } = useParams<{ task_id?: string; workspace?: string }>();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === task_id);

  const renderSubTasks = () => {
    return <div className="shadow-sm">
      <h3 className="font-semibold text-lg text-gray-800 mb-3">Subtasks</h3>
      <div className="space-y-3">
        {task!.subtasks!.map((st) => (
          <div
            key={st.id}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-blue-700">{st.name}</h4>
              <span
                className={`px-2 py-1 text-xs rounded transition hover:scale-105 ${st.status === "done"
                  ? "bg-green-100 text-green-800"
                  : st.status === "in-progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-600"
                  }`}
              >
                {capitalize(st.status)}
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-2">{st.description}</p>

            {/* Subtask members */}
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
              {(st.assignedTo ?? []).map((m) => (
                <span key={m.id} className="text-blue-600">
                  @{m.name}
                </span>
              ))}
            </div>

            {/* Subtask comments */}
            {st.comments && st.comments.length > 0 && (
              <div className="mt-3 border-t pt-2 space-y-1">
                {st.comments.map((c) => (
                  <p key={c.id} className="text-xs text-gray-600">
                    💬 <span className="font-medium text-gray-800">{c.by.name}:</span>{" "}
                    {c.message}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  }


  const renderComment = () => {
    return <div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">Comments</h3>
      <div className="space-y-2">
        {task!.comments!.map((c) => (
          <div key={c.id} className="border-l-4 border-blue-200 pl-3">
            <p className="text-sm">
              <span className="font-medium text-blue-700">{c.by.name}</span>:{" "}
              {c.message}
            </p>
            <p className="text-xs text-gray-400">
              {c.at.toLocaleDateString()} {c.at.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  }



  if (!task) {
    return (
      <div className="p-6 text-gray-600 italic">
        Task not found. Please check the workspace or task ID.
      </div>
    );
  }




  return (
    <div className="text-gray-800 h-full overflow-y-auto">
      {/* Sticky breadcrumb bar */}
      <div className="sticky top-0 z-20 flex items-center gap-1 px-6 py-3 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm text-blue-700">
        <Link
          to={`/tasks/${workspace}`}
          className="font-medium hover:text-blue-900 transition"
        >
          {capitalize(workspace || "Workspace")}
        </Link>
        <BiChevronRight size={20} className="text-gray-500" />
        <span
          onClick={() => navigate(-1)}
          className="cursor-pointer text-gray-600 hover:text-blue-800 transition"
        >
          {task?.name || task_id}
        </span>
      </div>

      {/* Main task content */}
      <div className="p-6 space-y-6">
        {/* Header section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-1">
            {task.name}
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span>
              Created by <span className="font-medium text-blue-700">{task.createdBy.name}</span> on{" "}
              <span className="text-blue-700">
                {task.createdAt.toLocaleDateString()}
              </span>
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
          <div className="flex flex-wrap gap-2">
            {task.members.map((m) => (
              <span
                key={m.id}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm bg-gray-200 shadow-md hover:bg-gray-100 transition-all hover:scale-105
                border hover:border-gray-500
                "
              >
                {m.name}
              </span>
            ))}
          </div>
        </div>

        {/* Subtasks */}
        {(task.subtasks && task.subtasks.length > 0) && renderSubTasks()}

        {/* Comments */}
        {(task.comments && task.comments.length > 0) && renderComment()}
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <p>Start: <span className="text-blue-700">{task.startDate.toLocaleDateString()}</span></p>
          <p>End: <span className="text-blue-700">{task.endDate.toLocaleDateString()}</span></p>
          {
            task.deadline && <p>Deadline: <span className={`font-medium ${task.deadline < new Date() && task.status !== "done" ? "text-red-500" : "text-blue-700"}`}>
              {task.deadline!.toLocaleDateString()}
            </span></p>
          }
        </div>

      </div>
    </div>
  );
};

export default Task;
