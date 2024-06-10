const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    image : {
        type : String
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    category : {
        type : String,
        required : true
    },

    ratings :{
        type : Number,
        required : true
    },
    review : {
        type : String,
        required : true
    }
});

const Blog = new mongoose.model('Blog', BlogSchema);
module.exports = Blog;