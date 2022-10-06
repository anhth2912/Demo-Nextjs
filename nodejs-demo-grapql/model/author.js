const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("author", authorSchema);
