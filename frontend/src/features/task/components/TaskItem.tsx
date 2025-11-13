import { useNavigate } from "react-router-dom";
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
    className="flex items-center gap-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm font-medium"
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
  const currentUser = task.members.find((m) => m.name === username);
  const accountableTo = currentUser?.accountableTo;
  const navigate = useNavigate();

  const statusColor =
    task.status === "done"
      ? "text-green-600"
      : task.status === "in-progress"
      ? "text-amber-600"
      : task.status === "review"
      ? "text-blue-600"
      : "text-gray-500";

  const priorityColor =
    task.priority === "high"
      ? "text-red-600"
      : task.priority === "medium"
      ? "text-amber-600"
      : "text-gray-500";

  return (
    <div
      onClick={() => navigate(`${task.id}`)}
      className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-200 space-y-3 cursor-pointer"
    >
      {/* Task Header */}
      <div>
        <h3 className="text-xl font-semibold text-blue-700">{task.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      </div>

      {/* Status & Priority */}
      <div className="text-sm space-y-1">
        <p>
          <span className="font-semibold text-gray-700">Status:</span>{" "}
          <span className={`${statusColor}`}>{capitalize(task.status)}</span>
        </p>
        <p>
          <span className="font-semibold text-gray-700">Priority:</span>{" "}
          <span className={`${priorityColor}`}>
            {task.priority ?? "N/A"}
          </span>
        </p>
      </div>

      {/* Members */}
      <div>
        <p className="font-semibold mb-1 text-sm text-gray-700">Members:</p>
        {hasMembers ? (
          <div className="flex flex-wrap gap-2">
            {task.members.map((member) => (
              <MemberCard member={member} key={member.id} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No members assigned</p>
        )}
      </div>

      {/* Accountable To */}
      <div>
        <p className="font-semibold mb-1 text-sm text-gray-700">
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
            <span className="text-sm text-gray-700">
              {accountableTo.name} ({accountableTo.position})
            </span>
          </div>
        ) : (
          <p className="text-sm italic text-gray-500">
            No accountable member found
          </p>
        )}
      </div>

      {/* Deadline */}
      {task.deadline && (
        <p className="text-sm text-gray-700">
          Deadline:{" "}
          <span
            className={
              new Date(task.deadline) < new Date() && task.status !== "done"
                ? "text-red-600 font-semibold"
                : "text-gray-600"
            }
          >
            {task.deadline.toDateString()}
          </span>
        </p>
      )}

      {/* Footer */}
      <div className="text-sm mt-3 flex flex-col md:flex-row justify-between items-start md:items-center text-gray-600">
        <p>
          Created by:{" "}
          <span className="text-gray-800 font-medium">
            {task.createdBy.name}
          </span>
        </p>
        {task.status === "done" && (
          <p className="text-gray-600">
            Completed At: {task.endDate.toDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
