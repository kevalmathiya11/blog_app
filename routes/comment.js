const express = require("express");
const router = express.Router();

const { commentPost } = require("../controllers/commentPost");

router.post("/commentPost", commentPost);

module.exports = router;
