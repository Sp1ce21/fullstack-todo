const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Query {
        getTasks: [Todo!]!
    }

    type Todo {
        id: ID!,
        title: String!,
        done: Boolean!,
        createdAt: String,
        updatedAt: String
    }

    input TodoInput {
        title: String!
    }

    type Mutation {
        createTask(task: TodoInput!): Todo!,
        completeTask(id: ID!): Boolean!,
        deleteTask(id: ID!): Boolean!
    }
`);
