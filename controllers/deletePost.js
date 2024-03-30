const post = require("../models/posts");

exports.deletePost = async (req, res) => {
  try {
    const post_id = req.params.id;

    await post.findByIdAndDelete({ _id: post_id });

    res.status(200).json({
      success: true,
      message: `Post ${post_id} successfully deleted`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
