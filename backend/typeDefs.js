const typeDefs = `#graphql
scalar Date

type Query {
  user: User
  users:[User]
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!  
  position: String!
  createdAt: String!  
  updatedAt: String!
}

type Mutation {
  CreateUser(userInput: UserInput): UserResponse
  Login(email:String,password:String):UserResponse
}

input UserInput {
  name: String!
  email: String!
  password: String!
  position: String!
}

type UserResponse {
  message: String
  error: String
  user: User
  token:String
}
`

export default typeDefs