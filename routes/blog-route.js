const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog-controller");
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require("../middlewares/admin-middleware");
const descMiddleware = require("../middlewares/desc-middleware");

// Routes for the blog controller
router
  .route("/blog/add")
  .post(authMiddleware, adminMiddleware, descMiddleware, blogController.createBlog);

router
    .route("/blogs")
    .get(blogController.getAllBlogs);

// router
//     .route("/blog/:id")
//     .get(adminController.getBlogById);

// router
//     .route("/blog/edit/:id")
//     .put(authMiddleware, adminMiddleware, adminController.updateBlogById);

router
    .route("/blog/delete/:id")
    .delete(authMiddleware, adminMiddleware, blogController.deleteBlogById);

module.exports = router;    