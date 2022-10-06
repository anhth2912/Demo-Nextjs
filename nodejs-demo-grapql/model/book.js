const mongoose = require("mongoose");
const author = require("./author");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genres: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
    ref: author,
  },
});

module.exports = mongoose.model("book", bookSchema);
