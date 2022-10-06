const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  #ROOT TYPE definitions
  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(title: String, genre: String, authorId: ID): Book
  }
`;

module.exports = typeDefs;

//mongodb+srv://anhth2912:hoanganh2000@cluster0.uumtgyt.mongodb.net/?retryWrites=true&w=majority
