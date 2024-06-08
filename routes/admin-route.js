const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-contoller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const upload = require("../utils/multer");

// Routes for the user controller
router
  .route("/user/add")
  .post(authMiddleware, adminMiddleware, adminController.addUser);
router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router
  .route("/user/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);
router
  .route("/user/edit/:id")
  .put(authMiddleware, adminMiddleware, adminController.updateUserById);
router
  .route("/user/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

//Routes for the service controller
router
  .route("/service/add")
  .post(authMiddleware, adminMiddleware, adminController.addService);
router.route("/services").get(adminController.getAllServices);
router
  .route("/service/:id")
  .get(authMiddleware, adminMiddleware, adminController.getServiceById);
router
  .route("/service/edit/:id")
  .put(authMiddleware, adminMiddleware, adminController.updateServiceById);
router
  .route("/service/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteServiceById);

//Routes for the contact controller
router.route("/contact/add").post(adminController.addContact);
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);
router
  .route("/contact/:id")
  .get(authMiddleware, adminMiddleware, adminController.getContactById);
router
  .route("/contact/edit/:id")
  .put(authMiddleware, adminMiddleware, adminController.updateContactById);
router
  .route("/contact/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

//Routes for the project controller
router
  .route("/project/add")
  .post(authMiddleware, adminMiddleware,upload.single('image'), adminController.addProject); 

router.route("/projects").get(adminController.getAllProjects);
router
  .route("/project/:id")
  .get(authMiddleware, adminMiddleware, adminController.getProjectById);
router
  .route("/project/edit/:id")
  .put(authMiddleware, adminMiddleware, upload.single('image'), adminController.updateProjectById);
router
  .route("/project/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteProjectById);

//Routes for the FAQ controller
router
  .route("/faq/add")
  .post(authMiddleware, adminMiddleware, adminController.addFAQ);
router.route("/faqs").get(adminController.getAllFAQs);  
router
  .route("/faq/:id")
  .get(authMiddleware, adminMiddleware, adminController.getFAQById);
router
  .route("/faq/edit/:id")
  .put(authMiddleware, adminMiddleware, adminController.updateFAQById);
router
  .route("/faq/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteFAQById);

module.exports = router;
