import prisma from "../db/prismaClient.js";

export const TaskMemberMapRepository = {
  // Assign a user to a task
  assignUserToTask: async (data) => {
    return await prisma.taskMemberMap.create({ data });
  },

  // Remove a user from a task
  removeUserFromTask: async (id) => {
    return await prisma.taskMemberMap.delete({ where: { id } });
  },

  // Get all members for a specific task
  getMembersByTaskId: async (taskId) => {
    return await prisma.taskMemberMap.findMany({
      where: { taskId },
      include: { user: true },
    });
  },

  // Get all tasks assigned to a specific user
  getTasksByUserId: async (userId) => {
    return await prisma.taskMemberMap.findMany({
      where: { userId },
      include: { task: true },
    });
  },

  // Update a member mapping (e.g., role)
  updateTaskMember: async (id, data) => {
    return await prisma.taskMemberMap.update({ where: { id }, data });
  },
};
