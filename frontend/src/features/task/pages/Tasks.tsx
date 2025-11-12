import React from "react";
import { Outlet, useParams } from "react-router-dom";
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
    <div className="flex-1 p-6 space-y-4">
      <h2 className="border-b pb-2 font-semibold text-3xl text-blue-600 border-white/30">
        {workspace ? `${capitalize(workspace)} Tasks` : "All Tasks"}
      </h2>

      {workspaceTasks.length > 0 ? (
        <div className="space-y-3">
          {workspaceTasks.map((t) => (
            <TaskItem key={t.id} task={t} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 italic">
          No tasks found for this workspace.
        </p>
      )}
  
    </div>
  );
};

export default Tasks;
