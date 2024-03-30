const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/createPost");
const { deletePost } = require("../controllers/deletePost");
const { getPost, getAllPost } = require("../controllers/getPost");
const { updatePost } = require("../controllers/updatePost");

router.post("/post/create", createPost);
router.delete("/post/delete/:id", deletePost);
router.get("/getPost/:id", getPost);
router.get("/getAllPost", getAllPost);
router.put("/updatepost/:id", updatePost);

module.exports = router;
