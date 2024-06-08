const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(500).json({ msg: "No token found" });
  }
  try {
    const jwtToken = token.split(" ")[1];
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    if (!isVerified) {
      throw new Error("Token isnot valid");
    }
    const userData = await User.findOne({ email: isVerified.email }).select(
      "-password"
    );
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = authMiddleware;
