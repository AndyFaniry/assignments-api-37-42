const fs = require("fs");
const multer = require("multer");
const photo = require("../models/photo");
const upload = require("../services/upload");


async function uploadFile (req, res) {
    upload(req, res, async (err) => {
        if (err) {
          res.json({ msgs: err.message });
        }
    
        const filePath = req.file.path
    
        if(!filePath) {
          return
        }
        var img = fs.readFileSync(req.file.path);
        var encode_img = img.toString('base64');
        var final_img = {
            name: req.file.filename,
            img:{
                contentType:req.file.mimetype,
                data:Buffer.from(encode_img, 'base64')
            }
        };
        photo.create(final_img,function(err,result){
            if(err){
                console.log(err);
            }else{
                res.json({ message: result})
            }
        });
      });
}


function findPhotoByName (req, res, next) {
    photo.findOne({name: req.params.name}, function (err, pht) {
        if (err) return res.status(500).send("Impossible de trouver la photo.");
        if (!pht) return res.status(404).send("Aucune photo trouvée.");
        res.contentType(pht.img.contentType);
        res.send(pht.img.data);
        // res.status(200).send(pht);
    });
};

module.exports = {uploadFile, findPhotoByName}