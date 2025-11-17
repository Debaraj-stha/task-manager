import { TaskMemberMapRepository } from "../repositories/taskMemberMap.repository.js";

export const TaskMemberService = {
  // Assign a user to a task
  assignUserToTask: async (data) => {
    return await TaskMemberMapRepository.assignUserToTask(data);
  },

  // Remove a user from a task
  removeUserFromTask: async (id) => {
    return await TaskMemberMapRepository.removeUserFromTask(id);
  },

  // Get all members of a specific task
  getMembersByTaskId: async (taskId) => {
    return await TaskMemberMapRepository.getMembersByTaskId(taskId);
  },

  // Get all tasks a user is assigned to
  getTasksByUserId: async (userId) => {
    return await TaskMemberMapRepository.getTasksByUserId(userId);
  },

  // Update a member mapping (e.g., role)
  updateTaskMember: async (id, data) => {
    return await TaskMemberMapRepository.updateTaskMember(id, data);
  },
};
