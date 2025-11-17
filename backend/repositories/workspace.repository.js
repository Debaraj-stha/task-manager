import prisma from "../db/prismaClient.js";

export const WorkspaceRepository = {
  // Create a new workspace
  createWorkspace: async (data) => {
    return await prisma.workspace.create({ data });
  },

  // Get all workspaces
  getAllWorkspaces: async () => {
    return await prisma.workspace.findMany({orderBy:{createdAt:"desc"}});
  },

  // Get workspace by ID
  getWorkspaceById: async (id) => {
    return await prisma.workspace.findUnique({ where: { id } });
  },

  // Get all workspaces created by a specific user
  getWorkspacesByUserId: async (userId) => {
    return await prisma.workspace.findMany({ where: { createdBy: userId },orderBy:{createdAt:"desc"} });
  },

  // Update a workspace by ID
  updateWorkspace: async (id, data) => {
    return await prisma.workspace.update({ where: { id }, data });
  },

  // Delete a workspace by ID
  deleteWorkspaceById: async (id) => {
    return await prisma.workspace.delete({ where: { id } });
  },

  // Delete all workspaces for a specific user
  deleteWorkspacesByUserId: async (userId) => {
    return await prisma.workspace.deleteMany({ where: { createdBy: userId } });
  },
};
