import prisma from "../db/prismaClient.js";

export const TaskRepository = {
  // Create a new task
  createTask: async (data) => {
    return await prisma.task.create({ data });
  },

  // Get a task by ID
  getTaskById: async (id) => {
    return await prisma.task.findUnique({ where: { id } });
  },

  // Get all tasks
  getAllTasks: async () => {
    return await prisma.task.findMany({orderBy:{createdAt:"desc"}});
  },

  // Update a task by ID
  updateTask: async (id, data) => {
    return await prisma.task.update({ where: { id }, data });
  },

  // Delete a task by ID
  deleteTaskById: async (id) => {
    return await prisma.task.delete({ where: { id } });
  },

  // Get all tasks created by a specific user
  getTasksByUserId: async (userId) => {
    return await prisma.task.findMany({ where: { createdBy: userId } });
  },

  // Get all tasks in a specific workspace
  getTasksByWorkspaceId: async (workspaceId) => {
    return await prisma.task.findMany({ where: { workspaceId } });
  },
};
