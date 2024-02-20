const { gql, ApolloServer } = require("apollo-server");
//CREATE FAKE DATABASE
let books = [];
//DEFINE TYPES
const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
    publishedAt: Int
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    create(id: ID!, title: String!, author: String!, publishedAt: Int!): Book
    delete(id: ID!): Boolean
    update(id: ID!, title: String, author: String, publishedAt: Int): Book
  }
`;
//DEFINE RESOLVERS
const resolvers = {
  Query: {
    books: () => {
      return books;
    },
    book: (_, { id }) => {
      return books.find((book) => book.id === id);
    },
  },
};
//CREATE SERVER

//RUN SERVER
