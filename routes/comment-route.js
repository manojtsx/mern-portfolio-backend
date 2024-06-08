const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const commentController = require('../controllers/comment-controller');

router.post('/create', authMiddleware, commentController.createComment);

module.exports = router;