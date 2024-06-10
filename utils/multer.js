const multer = require('multer');
const path = require('path');

// Set Storage Engine
const storage = multer.diskStorage({
    destination : function(req,file, cb){
        cb(null, 'uploads/project');

    },
    filename : function(req, file, cb){
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename.replace(/\\/g, '/')); // Replace backslashes with forward slashes
}
});

// Init Upload
const upload = multer({
    storage : storage,
    limits : {
        fileSize : 1024 * 1024 * 10
    },
    fileFilter : function(req, file, cb){
        checkFileType(file, cb);
    },
});

// Check File Type
function checkFileType(file, cb){
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    }else{
        cb('Error: Images Only!');
    }
}

module.exports = upload;