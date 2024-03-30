const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
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
  likedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Like", likeSchema);
