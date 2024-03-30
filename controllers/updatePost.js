const post = require("../models/posts");

exports.updatePost = async (req, res) => {
  try {
    const post_id = req.params.id;

    const { title, content } = req.body;

    const Post = await post.findByIdAndUpdate(
      { _id: post_id },
      { title, content, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: Post,
      message: `Post ${post_id} successfully updated`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
