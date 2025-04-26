const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog
} = require("../controllers/blogController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/", authMiddleware, getAllBlogs);

router.post("/", authMiddleware, roleMiddleware(["admin"]), createBlog);
router.put("/:id", authMiddleware, roleMiddleware(["admin"]), updateBlog);
router.delete("/:id", authMiddleware, roleMiddleware(["admin"]), deleteBlog);

module.exports = router;
