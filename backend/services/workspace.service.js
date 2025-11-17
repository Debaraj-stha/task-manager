import { WorkspaceRepository } from "../repositories/workspace.repository.js";

export const WorkspaceService = {
  // Create a new workspace
  createWorkspace: async (data) => {
    return await WorkspaceRepository.createWorkspace(data);
  },

  // Get all workspaces
  getAllWorkspaces: async () => {
    return await WorkspaceRepository.getAllWorkspaces();
  },

  // Get all workspaces created by a specific user
  getWorkspacesByUserId: async (userId) => {
    return await WorkspaceRepository.getWorkspacesByUserId(userId);
  },

  // Get workspace by ID
  getWorkspaceById: async (id) => {
    return await WorkspaceRepository.getWorkspaceById(id);
  },

  // Update a workspace by ID
  updateWorkspace: async (id, data) => {
    return await WorkspaceRepository.updateWorkspace(id, data);
  },

  // Delete a workspace by ID
  deleteWorkspaceById: async (id) => {
    return await WorkspaceRepository.deleteWorkspaceById(id);
  },

  // Delete all workspaces created by a specific user
  deleteWorkspacesByUserId: async (userId) => {
    return await WorkspaceRepository.deleteWorkspacesByUserId(userId);
  },
};
