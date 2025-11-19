import { UserRepository } from "../repositories/user.repository.js";

export const UserService = {
  // Create a new user (add validation, hashing, etc. if needed)
  createUser: async (userData) => {
    return await UserRepository.createUser(userData);
  },

  // Get a user by ID
  getUserById: async (id) => {
    return await UserRepository.getUserById(id);
  },
  getUserByEmailId:async(email)=>await UserRepository.getUserByEmail(email),

  // Get all users
  getAllUsers: async () => {
    return await UserRepository.getAllUsers({});
  },

  // Update a user by ID
  updateUser: async (id, data) => {
    return await UserRepository.updateUser(id, data);
  },

  // Delete a user by ID
  deleteUser: async (id) => {
    return await UserRepository.deleteUser(id);
  },

  // Get all users who are members of a specific task
  getUsersByTaskId: async (taskId) => {
    return await UserRepository.getUsersByTaskId(taskId);
  },
};
