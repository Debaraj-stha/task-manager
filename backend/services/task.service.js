import { TaskRepository } from "../repositories/task.repository.js";


export const TaskService = {
  // Create a new task
  createTask: async (data) => {
    return await TaskRepository.createTask(data);
  },

  // Get task by ID
  getTaskById: async (id) => {
    return await TaskRepository.getTaskById(id);
  },

  // Get all tasks
  getAllTasks: async () => {
    return await TaskRepository.getAllTasks();
  },

  // Update a task by ID
  updateTask: async (id, data) => {
    return await TaskRepository.updateTask(id, data);
  },

  // Delete a task by ID
  deleteTaskById: async (id) => {
    return await TaskRepository.deleteTaskById(id);
  },

  // Get tasks created by a specific user
  getTasksByUserId: async (userId) => {
    return await TaskRepository.getTasksByUserId(userId);
  },

  // Get tasks in a specific workspace
  getTasksByWorkspaceId: async (workspaceId) => {
    return await TaskRepository.getTasksByWorkspaceId(workspaceId);
  },

};
