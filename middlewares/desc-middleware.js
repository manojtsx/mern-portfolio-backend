const fs = require('fs');
const path = require('path');

// Storage Description Text into a file
const descMiddleware = (req,res,next)=>{
    try{
        const {description} = req.body;
        const descPath = path.join(__dirname, `../uploads/blog/description/description.txt`);
        fs.writeFileSync(descPath, description);
        req.body.description = descPath;
        next();
    }catch(err){
        res.status(500).json({msg: err.message});
    }
}

module.exports = descMiddleware;