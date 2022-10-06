const resolvers = {
  Query: {
    books: async (parent, args, context) => {
      return await context.mongoMethod.getBooks();
    },
    authors: async (parent, args, context) => {
      return await context.mongoMethod.getAuthors();
    },

    book: async (parent, args, context) => {
      return await context.mongoMethod.getBookById(args.id);
    },

    author: async (parent, args, context) => {
      return await context.mongoMethod.getAuthorById(args.id);
    },
  },
  Book: {
    author: async (parent, args, context) => {
      return await context.mongoMethod.getBooks({ id: args.id });
    },
  },
  Author: {
    books: async (parent, args, context) => {
      return await context.mongoMethod.getAuthors({ id: args.id });
    },
  },

  //Mutation
  Mutation: {
    createAuthor: async (parent, args, context) => {
      return await context.mongoMethod.createAuthor(args);
    },
    createBook: async (parent, args, context) => {
      return await context.mongoMethod.createBook(args);
    },
  },
};

module.exports = resolvers;
