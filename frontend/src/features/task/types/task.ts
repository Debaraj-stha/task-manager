import type { Member } from "./members";

export interface Task {
  id: string; 
  name: string;
  description: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  deadline?:Date
  status: "todo" | "in-progress" | "review" | "done"; // Common workflow states
  priority?: "low" | "medium" | "high"; // Optional but useful
  workspace?: string; 
  members: Member[]; // Assigned team members
  createdBy: Member; 
  updatedAt?: Date; 
  tags?: string[]; 
}
