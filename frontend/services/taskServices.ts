import { tasks } from "@/constants/content/tasks/tasks";
import { Task } from "@/types/task";

export const getSubtasks = (taskId: string) => {
  return tasks.filter(t => t.parentTaskId === taskId);
};

// Recursive example (for deeply nested subtasks)
export const getAllNestedSubtasks = (taskId: string): Task[] => {
  const directSubs = getSubtasks(taskId);
  return directSubs.concat(
    directSubs.flatMap(sub => getAllNestedSubtasks(sub.id))
  );
};
