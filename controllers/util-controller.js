const User = require("../models/user-model");
const Service = require("../models/service-model");
const Project = require("../models/project-model");
const FAQ = require("../models/faq-model");
const Contact = require("../models/contact-model");
const Blog = require("../models/blog-model");

const countUser = async (_, res) => {
  try {
    const userCount = await User.countDocuments({});
    res.status(200).json({ count: userCount });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const countService = async (_, res) => {
  try {
    const serviceCount = await Service.countDocuments({});
    res.status(200).json({ count: serviceCount });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const countProject = async (_, res) => {
  try {
    const projectCount = await Project.countDocuments({});
    res.status(200).json({ count: projectCount });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const countFAQ = async (_, res) => {
  try {
    const faqCount = await FAQ.countDocuments({});
    res.status(200).json({ count: faqCount });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const countContact = async (_, res) => {
  try {
    const contactCount = await Contact.countDocuments({});
    res.status(200).json({ count: contactCount });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const countBlog = async(_,res)=>{
  try{
    const blogCount = await Blog.countDocuments({});
    res.status(200).json({count : blogCount});
  }catch(err){
    res.status(500).json({msg : err.message});
  }
}

module.exports = {
  countUser,
  countService,
  countProject,
  countFAQ,
  countContact,
  countBlog
};
