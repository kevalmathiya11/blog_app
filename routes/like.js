const express = require("express");
const router = express.Router();

const { likePost, disLikepost } = require("../controllers/likePost");

router.post("/likePost", likePost);
router.delete("/dislikePost/:id", disLikepost);

module.exports = router;
