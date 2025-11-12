import type { Task } from "../../../features/task/types/task";
import { members } from "./members";


export const tasks: Task[] = [
  {
    id: "task-001",
    name: "Project Kickoff Meeting",
    deadline:new Date(2022,12,12),
    description: "Organize and conduct the initial meeting to align project goals and deliverables.",
    createdAt: new Date("2025-11-10T08:00:00Z"),
    startDate: new Date("2025-11-12T09:00:00Z"),
    endDate: new Date("2025-11-18T17:00:00Z"),
    status: "in-progress",
    priority: "medium",
    workspace: "office",
    members: [members[0], members[5], members[1]],
    createdBy: members[0],
    updatedAt: new Date("2025-11-18T16:45:00Z"),
    tags: ["planning", "meeting", "management"]
  },
  {
    id: "task-002",
    name: "UI/UX Design Sprint",
    description: "Create wireframes, user flows, and prototype for the main dashboard.",
    createdAt: new Date("2025-11-11T10:00:00Z"),
    startDate: new Date("2025-11-13T09:00:00Z"),
    endDate: new Date("2025-11-20T17:00:00Z"),
    status: "review",
    priority: "high",
    workspace: "office",
    members: [members[3], members[7], members[9]],
    createdBy: members[3],
    updatedAt: new Date("2025-11-19T14:00:00Z"),
    tags: ["design", "ux", "prototype"]
  },
  {
    id: "task-003",
    name: "Frontend Development",
    description: "Implement UI components using React and integrate with backend APIs.",
    createdAt: new Date("2025-11-12T11:00:00Z"),
    startDate: new Date("2025-11-14T09:00:00Z"),
    endDate: new Date("2025-11-25T17:00:00Z"),
    status: "in-progress",
    priority: "high",
    workspace: "office",
    members: [members[1], members[3], members[7]],
    createdBy: members[1],
    updatedAt: new Date("2025-11-16T12:30:00Z"),
    tags: ["frontend", "react", "ui"]
  },
  {
    id: "task-004",
    name: "Backend API Development",
    description: "Build RESTful APIs and set up authentication and database schema.",
    createdAt: new Date("2025-11-13T09:30:00Z"),
    startDate: new Date("2025-11-15T09:00:00Z"),
    endDate: new Date("2025-11-24T17:00:00Z"),
    status: "in-progress",
    priority: "high",
    workspace: "office",
    members: [members[2], members[6], members[4]],
    createdBy: members[2],
    updatedAt: new Date("2025-11-17T10:20:00Z"),
    tags: ["backend", "api", "nodejs"]
  },
  {
    id: "task-005",
    name: "Testing and QA",
    description: "Perform integration, regression, and user acceptance testing.",
    createdAt: new Date("2025-11-14T08:45:00Z"),
    startDate: new Date("2025-11-16T09:00:00Z"),
    endDate: new Date("2025-11-27T17:00:00Z"),
    status: "todo",
    priority: "medium",
    workspace: "office",
    members: [members[4], members[1], members[2]],
    createdBy: members[4],
    updatedAt: new Date("2025-11-14T08:50:00Z"),
    tags: ["testing", "qa", "bugfix"]
  },
  {
    id: "task-006",
    name: "Marketing Launch Plan",
    description: "Develop and schedule social media campaigns for product release.",
    createdAt: new Date("2025-11-15T10:15:00Z"),
    startDate: new Date("2025-11-18T09:00:00Z"),
    endDate: new Date("2025-11-28T17:00:00Z"),
    status: "todo",
    priority: "low",
    workspace: "design",
    members: [members[8], members[9], members[7]],
    createdBy: members[9],
    updatedAt: new Date("2025-11-15T10:20:00Z"),
    tags: ["marketing", "launch", "social-media"]
  }
];
