const express = require("express");
const router = express.Router();
const utilController = require("../controllers/util-controller");

router.route("/countuser").get(utilController.countUser);
router.route("/countservice").get(utilController.countService);
router.route("/countproject").get(utilController.countProject);
router.route("/countfaq").get(utilController.countFAQ);
router.route("/countcontact").get(utilController.countContact);
router.route("/countblog").get(utilController.countBlog);

module.exports = router;
