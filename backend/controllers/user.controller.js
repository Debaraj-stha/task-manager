import { UserService } from "../services/user.service.js";

export const UserController = {
  createUser: async (req, res) => {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json({user,message:"User created successfully"});
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getUsers: async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
  },
};
