import { buildSchema } from "graphql";

export default buildSchema(`
    type Ping{
        pong: String!
    }
    type User{
        _id: ID!
        username: String!
        email: String!
        password: String!
        error: [Error]
    }
    type AuthData{
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
    input UserInput{
        username: String
        email: String
        password: String!
    }
    type RootQuery {
        sign_in(userInput: UserInput): AuthData!
        pingWithoutAuth: Ping!
        pingWithAuth: Ping!
    }
    type RootMutation{
        sign_up(userInput: UserInput!): User
    }
    type Error {
        path: String!
        message: String!
    }
    schema{
        query: RootQuery
        mutation: RootMutation
    }
`);