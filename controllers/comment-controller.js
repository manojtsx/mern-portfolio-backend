const Comment = require('../models/comment-model');

// Create a new comment
const createComment = (req, res) => {
  const comment = new Comment({
    ...req.body,

    // Add the user ID to the comment
    user: req.user._id
    });

    comment.save()
        .then(() => res.status(201).json({ message: 'Comment created!' }))
        .catch(error => res.status(400).json({ error }));
}

module.exports = {
    createComment
    };