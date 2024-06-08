const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    blog : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Blog',
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
});

const Comment = new mongoose.model('Comment', CommentSchema);
module.exports = Comment;