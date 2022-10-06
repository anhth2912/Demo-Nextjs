const Book = require("../model/book");
const Author = require("../model/author");

const getBooks = async (condition) => {
  return condition ? await Book.find(condition) : await Book.find();
};

const getBookById = async (bookId) => {
  return await Book.findById(bookId);
};

const getAuthors = async (condition) => {
  return condition ? await Author.find(condition) : await Author.find();
};

const getAuthorById = async (authorId) => {
  return await Author.findById(authorId);
};

const createBook = async (book) => {
  const newBook = new Book(book);
  await newBook.save();
  return newbook;
};

const createAuthor = async (author) => {
  const newAuthor = new Author(author);
  await newAuthor.save();
  return newAuthor;
};
module.exports = {
  getBooks,
  getAuthors,
  getBookById,
  getAuthorById,
  createBook,
  createAuthor,
};
