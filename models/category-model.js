const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    blogs : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Blog'
    }],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
});

const Category = new mongoose.model('Category', CategorySchema);
module.exports = Category;