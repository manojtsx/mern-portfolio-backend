const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image : {
    type : String,
    required : true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = new mongoose.model("Project", projectSchema);
module.exports = Project;
