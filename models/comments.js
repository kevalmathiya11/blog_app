const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
    length: 24,
  },
  user_id: {
    type: String,
    required: true,
    maxLength: 20,
  },
  content: {
    type: String,
    required: true,
    maxLength: 50,
  },
  commentedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Comment", commentSchema);
