const Blog = require("../models/blog-model");
const User = require("../models/user-model");

const isValidObjectId = (id) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};
// Create a new blog
const createBlog = (req, res) => {
  const blog = new Blog({
    ...req.body,

    // Add the user ID to the blog
    user: req.user._id,
  });

  blog
    .save()
    .then(() => res.status(201).json({ data: "Blog created!" }))
    .catch((error) => res.status(400).json({ msg : error.message}));
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    const updatedBlogs = await Promise.all(
      blogs.map(async (blog) => {
        let user = await User.findOne(blog.author);
        return { ...blog._doc, author: user.name };
      })
    );
    if (!updatedBlogs) {
      return res.status(404).json({ message: "No blogs found" });
    }
    res.status(200).json({ data: updatedBlogs });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Blog Id");
    }
    const response = await Blog.findByIdAndDelete(id);
    if (!response) {
      throw new Error("Can't find Blog to delete");
    }
    res.status(200).json({ data: "Blog Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  deleteBlogById,
};
