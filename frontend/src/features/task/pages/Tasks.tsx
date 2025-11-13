import React from "react";
import { useParams } from "react-router-dom";
import { tasks } from "../../../constants/content/tasks/tasks";
import TaskItem from "../components/TaskItem";
import { capitalize } from "../../../utils/utils";

const Tasks: React.FC = () => {
  const { workspace } = useParams<{ workspace?: string }>();

  const workspaceTasks = workspace
    ? tasks.filter(
      (t) => t.workspace?.toLowerCase() === workspace.toLowerCase()
    )
    : tasks;

  return (
    <div className="flex-1 h-full overflow-y-auto bg-gray-50">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 px-6 py-4">
        <h2 className="font-semibold text-3xl text-blue-700">
          {workspace ? `${capitalize(workspace)} Tasks` : "All Tasks"}
        </h2>
      </div>

      {/* Task list */}
      <div className="p-6 space-y-4">
        {workspaceTasks.length > 0 ? (
          workspaceTasks.map((t) => <TaskItem key={t.id} task={t} />)
        ) : (
          <p className="text-gray-500 italic">
            No tasks found for this workspace.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tasks;
