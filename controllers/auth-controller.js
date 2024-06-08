const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const home = async (req, res) => {
  try {
    res.status(200).send({ data: "Speaking from home" });
  } catch (err) {
    res.status(404).json({ msg: "Erro in Home" });
  }
};
const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await User.findOne({ username: username });
    if (!userExist) {
      return res.status(404).json({ msg: "User doesn't exists" });
    }
    const isMatch = await userExist.isValidPassword(
      password,
      userExist.password
    );
    if (!isMatch) {
      return res.status(404).json({ msg: "User doesn't exists" });
    }
    res.status(200).json({
      msg: "Login Successfull",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
const signup = async (req, res) => {
  try {
    const { username, name, email, phone, password } = req.body;
    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist) {
      return res.status(404).json({ msg: "Username already exists" });
    }
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(404).json({ msg: "Email already exists" });
    }
    const user = await User.create({ username, name, email, phone, password });
    return res.status(200).json({ data: user, msg: "Registered Successfully" });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({ _id: decodedToken.userId });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ isAdmin: user.isAdmin });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = { home, signin, signup, getUser };
