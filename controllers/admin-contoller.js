const User = require("../models/user-model");
const Service = require("../models/service-model");
const Contact = require("../models/contact-model");
const Project = require("../models/project-model");
const FAQ = require("../models/faq-model");
const deleteImage = require('../utils/delete_image');

const isValidObjectId = (id) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};
/*
--------------User Controller Section------------------------
*/
const addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    if (!savedUser) {
      throw new Error("Error while saving the user");
    }

    res.status(201).json({ data: "User Added Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getAllUsers = async (_, res) => {
  try {
    const users = await User.find({}).select("-password");
    if (!users) {
      throw new Error("Cannot find any user");
    }
    res.status(200).json({ data: users });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid User Id");
    }
    const user = await User.findById(id).select("-password");
    if (!user) {
      throw new Error("Cannot find user");
    }
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid User Id");
    }
    const updateData = req.body;

    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (!user) {
      throw new Error("Could find user");
    }
    res.status(200).json({ data: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid User Id");
    }
    // const response = await User.findByIdAndDelete(id);
    const response = await User.findByIdAndDelete(id);
    if (!response) {
      throw new Error("Can't find user to delete");
    }
    res.status(200).json({ data: "User Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
/*
--------------Service Controller Section------------------------
*/
const addService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();

    if (!savedService) {
      throw new Error("Error while saving the service");
    }

    res.status(201).json({ data: "Service added successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getAllServices = async (_, res) => {
  try {
    const services = await Service.find({});
    if (services.length === 0) {
      throw new Error("Cannot find any Service");
    }
    res.status(200).json({ data: services });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Service Id");
    }
    const service = await Service.findById(id);
    if (!service) {
      throw new Error("Cannot find Service");
    }
    res.status(200).json({ data: service });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const updateServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Service Id");
    }
    const updateData = req.body;

    const service = await Service.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!service) {
      throw new Error("Could find Service");
    }
    res.status(200).json({ data: "Service updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const deleteServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Service Id");
    }
    // const response = await Service.findByIdAndDelete(id);
    const response = await Service.findByIdAndDelete(id);
    if (!response) {
      throw new Error("Can't find Service to delete");
    }
    res.status(200).json({ data: "Service Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

/*
--------------Contact Controller Section------------------------
*/
const addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();

    if (!savedContact) {
      throw new Error("Error while saving the Contact");
    }

    res.status(201).json({ data: "Message added Successfully." });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getAllContacts = async (_, res) => {
  try {
    const contacts = await Contact.find({});
    if (!contacts) {
      throw new Error("Cannot find any Contact");
    }
    res.status(200).json({ data: contacts });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Contact Id");
    }
    const contact = await Contact.findById(id);
    if (!contact) {
      throw new Error("Cannot find Contact");
    }
    res.status(200).json({ data: contact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const updateContactById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Contact Id");
    }
    const updateData = req.body;

    const contact = await Contact.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!contact) {
      throw new Error("Could find Contact");
    }
    res.status(200).json({ data: "Contact updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Contact Id");
    }
    // const response = await Contact.findByIdAndDelete(id);
    const response = await Contact.findByIdAndDelete(id);
    if (!response) {
      throw new Error("Can't find Contact to delete");
    }
    res.status(200).json({ data: "Contact Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

/*
--------------Project Controller Section------------------------
*/

const addProject = async (req, res) => {
  try {
    const newProject = new Project({...req.body,
      image:req.file.path
    });
    const savedProject = await newProject.save();

    if (!savedProject) {
      throw new Error("Error while saving the Project");
    }

    res.status(201).json({ data: "Project added successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getAllProjects = async (_, res) => {
  try {
    const projects = await Project.find({});
    if (!projects) {
      throw new Error("Cannot find any Project");
    }
    res.status(200).json({ data: projects });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Project Id");
    }
    const project = await Project.findById(id);
    if (!project) {
      throw new Error("Cannot find Project");
    }
    res.status(200).json({ data : project });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const updateProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Project Id");
    }
    const updateData = req.body;

    if(req.file){
      updateData.image = req.file.path;
    }

    const project = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!project) {
      throw new Error("Could find Project");
    }
    res.status(200).json({ data: "Project updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const deleteProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid Project Id");
    }

    const project = await Project.findById(id);
    if (!project) {
      throw new Error("Can't find Project to delete");
    }

    // Delete the image file
    deleteImage(project.image);

    // Delete the project from the database
    const response = await Project.findByIdAndDelete(id);
    res.status(200).json({ data: "Project Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


/*
--------------FAQ Controller Section------------------------
*/
const addFAQ = async (req, res) => {
  try {
    const newFAQ = new FAQ(req.body);
    const savedFAQ = await newFAQ.save();

    if (!savedFAQ) {
      throw new Error("Error while saving the FAQ");
    }

    res.status(201).json({ data: "FAQ added successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getAllFAQs = async (_, res) => {
  try {
    const FAQs = await FAQ.find({});
    if (FAQs.length === 0) {
      throw new Error("Cannot find any FAQ");
    }
    res.status(200).json({ data: FAQs });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const getFAQById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid FAQ Id");
    }
    const FAQ1 = await FAQ.findById(id);
    if (!FAQ1) {
      throw new Error("Cannot find FAQ");
    }
    res.status(200).json({ data: FAQ1 });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const updateFAQById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid FAQ Id");
    }
    const updateData = req.body;

    const FAQ1 = await FAQ.findByIdAndUpdate(id, updateData, { new: true });
    if (!FAQ1) {
      throw new Error("Could find FAQ");
    }
    res.status(200).json({ data: "FAQ updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const deleteFAQById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      throw new Error("Invalid FAQ Id");
    }
    // const response = await FAQ.findByIdAndDelete(id);
    const response = await FAQ.findByIdAndDelete(id);
    if (!response) {
      throw new Error("Can't find FAQ to delete");
    }
    res.status(200).json({ data: "FAQ Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addService,
  getAllServices,
  getServiceById,
  updateServiceById,
  deleteServiceById,
  addContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
  addProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  addFAQ,
  getAllFAQs,
  getFAQById,
  updateFAQById,
  deleteFAQById,
};
