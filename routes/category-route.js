const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

const categoryController = require('../controllers/category-controller');

router.post('/create', authMiddleware, adminMiddleware, categoryController.createCategory);

module.exports = router;
