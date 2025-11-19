import { UserService } from "./services/user.service.js";
import { GraphQLScalarType } from 'graphql';
import bcryptjs from "bcryptjs"
import crypto from "crypto"
// Add Date scalar resolver
const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === 'IntValue') {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});


const resolvers = {
  Date: dateScalar,

  Query: {
    user: async (id) => await UserService.getUserById(id),
    users: async () => await UserService.getAllUsers(id)
  },

  Mutation: {
    CreateUser: async (_, { userInput }) => {
      const hashedPass = await bcryptjs.hash(userInput.password, 10)
      const updatedUser = { ...userInput, password: hashedPass }
      const res = await UserService.createUser(updatedUser)
      return {
        user: res,
        message: "User created successfully",
        error: ""
      }
    },
    Login: async (_, { email, password }) => {
      const user = await UserService.getUserByEmailId(email)
      if (!user) {
        return {
          error:"",
          message: "Invalid credentials"
        }
      }
      const isMatched = await bcryptjs.compare(password, user.password)
      if (!isMatched) {
        return {
          error:"",
          message: "Invalid credentials"
        }
      }
      const token=crypto.randomBytes(32).toString("hex")
      return {
        user,
        error:"",
        token,
        message: "Login successfully"
      }
    }
  }
};

export default resolvers; // Export as 'resolvers'