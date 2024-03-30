const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  content: {
    type: String,
    required: true,
    maxLength: 50,
  },
  like: {
    type: Number,
  },
  dislike:{
    type:Number
  },
  comment: {
    type: String,
    required: false,
    maxLength: 50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", postSchema);
