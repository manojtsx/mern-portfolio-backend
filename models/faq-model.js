const mongoose = require("mongoose");
const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

const FAQ = new mongoose.model("FAQ", faqSchema);
module.exports = FAQ;
