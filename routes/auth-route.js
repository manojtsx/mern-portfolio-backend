const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/signup-validator");
const signinSchema = require("../validators/signin-validator");

router.route("/signin").post(validate(signinSchema), authController.signin);
router.route("/signup").post(validate(signupSchema), authController.signup);
router.route("/user").get(authController.getUser);
router.route("/").get(authController.home);

module.exports = router;
