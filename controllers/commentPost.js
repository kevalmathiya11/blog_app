const comment = require("../models/comments");

exports.commentPost = async (req, res) => {
  try {
    const { post_id, user_id, content } = req.body;
    const Comment = await comment.create({
      post_id,
      user_id,
      content,
      commentedAt: Date.now(),
    });

    res.status(200).json({
      success: true,
      data: Comment,
      message: `commented successfully on post ${post_id}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
