const like = require("../models/likes");
const post = require("../models/posts");

exports.likePost = async (req, res) => {
  try {
    //change in likeSchema
    const { post_id, user_id } = req.body;
    const Like = await like.create({ post_id, user_id, likedAt: Date.now() });

    //change in postSchema
    const Post = await post.findByIdAndUpdate(
      { _id: post_id },
      { $inc: { like: 1 } }
    );
    res.status(200).json({
      success: true,
      data: Post,
      message: `Post ${post_id} successfully liked`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};

exports.disLikepost = async (req, res) => {
  try {
    const post_id = req.params.id;

    //delete entry in likeSchema

    await like.findOneAndDelete({ post_id: post_id });

    //remove like from post

    const Post = await post.findByIdAndUpdate(
      { _id: post_id },
      { $inc: { like: -1 } }
    );
    res.status(200).json({
      success: true,
      data: Post,
      message: `Post ${post_id} successfully disliked`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
