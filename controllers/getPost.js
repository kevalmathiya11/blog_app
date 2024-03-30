const post = require("../models/posts");

exports.getPost = async (req, res) => {
  try {
    const post_id = req.params.id;

    const Post = await post.findById({ _id: post_id });

    if (!Post) {
      return res.status(404).json({
        success: false,
        message: "NOT FOUND",
      });
    } else {
      return res.status(200).json({
        success: true,
        data: Post,
        message: `Post ${post_id} Data successfully fetched`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const Posts = await post.find({});

    res.status(200).json({
      success: true,
      data: Posts,
      message: "Etire posts data is fetched",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
