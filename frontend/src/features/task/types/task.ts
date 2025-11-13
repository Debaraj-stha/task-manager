import type { Member } from "./members";

export type TaskStatus = "todo" | "in-progress" | "review" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface Comment {
  id: string;
  message: string;
  by: Member;
  at: Date;
}

export interface Subtask {
  id: string;
  name: string;
  description?: string;
  status: TaskStatus;
  assignedTo?: Member[];
  createdAt: Date;
  updatedAt?: Date;
  dueDate?: Date;
  parentTaskId: string;
  comments:Comment[]
}

export interface Task {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  deadline?: Date;
  status: TaskStatus;
  priority?: TaskPriority;
  workspace?: string;
  members: Member[];
  createdBy: Member;
  updatedAt?: Date;
  tags?: string[];
  subtasks?: Subtask[];
  comments?: Comment[]; 
}
