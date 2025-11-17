import prisma from "../db/prismaClient.js";

export const TaskUpdateRepository = {
  // Log a new task update
  createUpdate: async (data) => {
    return await prisma.taskUpdate.create({ data });
  },

  // Get all updates for a specific task
  getUpdatesByTaskId: async (taskId) => {
    return await prisma.taskUpdate.findMany({
      where: { taskId },
      include: { user: true },
      orderBy: { updatedAt: "desc" },
    });
  },

  // Get all updates made by a specific user
  getUpdatesByUserId: async (userId) => {
    return await prisma.taskUpdate.findMany({
      where: { updatedBy: userId },
      include: { task: true },
      orderBy: { updatedAt: "desc" },
    });
  },
};
