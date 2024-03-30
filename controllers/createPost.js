const post = require("../models/posts");

exports.createPost = async (req, res) => {
  try {
    const { author, title, content, like, dislike } = req.body;

    const response = await post.create({
      author,
      title,
      content,
      like,
      dislike,
    });

    res.status(200).json({
      success: true,
      data: response,
      message: "Post created successfully",
    });
  } catch (error) {
    console.error("error:", error);

    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
