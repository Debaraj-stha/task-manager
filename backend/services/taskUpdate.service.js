import { TaskUpdateRepository } from "../repositories/taskUpdate.repository.js";

export const TaskUpdateService = {
  // Log a new task update
  createTaskUpdate: async (data) => {
    return await TaskUpdateRepository.createUpdate(data);
  },

  // Get all updates for a specific task
  getUpdatesByTaskId: async (taskId) => {
    return await TaskUpdateRepository.getUpdatesByTaskId(taskId);
  },

  // Get all updates made by a specific user
  getUpdatesByUserId: async (userId) => {
    return await TaskUpdateRepository.getUpdatesByUserId(userId);
  },
};
