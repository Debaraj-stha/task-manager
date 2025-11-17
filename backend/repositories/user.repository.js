import prisma from "../db/prismaClient.js";

export const UserRepository = {
  // Create a new user
  createUser: async (data) => {
    return await prisma.user.create({ data });
  },

  // Get a user by ID
  getUserById: async (id) => {
    return await prisma.user.findUnique({ where: { id } });
  },

  // Get all users
  getAllUsers: async () => {
    return await prisma.user.findMany({orderBy:{'createdAt':"desc"}});
  },

  // Update a user by ID
  updateUser: async (id, data) => {
    return await prisma.user.update({ where: { id }, data });
  },

  // Delete a user by ID
  deleteUser: async (id) => {
    return await prisma.user.delete({ where: { id } });
  },

  // Get all users who are members of a specific task
  getUsersByTaskId: async (taskId) => {
    return await prisma.user.findMany({
      where: {
        taskMembers:{some:{taskId}}
      },
      include: {
        taskMembers: {
          where: { taskId },
          include: { task: true }, // include task info if needed
        },
      },
    });
  },
};
