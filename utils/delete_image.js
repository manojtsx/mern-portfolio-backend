const fs = require('fs');
const path = require('path');

const deleteImage = (imagePath) =>{
    fs.unlink(path.join(imagePath),(err)=>{
        if(err){
            throw new Error(err.message);
        }
    })
}

module.exports = deleteImage;