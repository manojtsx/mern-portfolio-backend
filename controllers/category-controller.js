const Cateogry = require('../models/category-model');

// // Create a new category
const createCategory = (req, res) => {  
    const category = new Category({
        ...req.body
    });
    
    category.save()
        .then(() => res.status(201).json({ message: 'Category created!' }))
        .catch(error => res.status(400).json({ error }));
    }

module.exports = {
    createCategory
    };