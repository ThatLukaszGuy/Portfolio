const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const Techs = require('../models/techModel')
const fs = require('fs')

    // manage img upload
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now())
        }
    });
      
    const upload = multer({ storage: storage });

exports.singleUpload = upload.single('iconImage')


exports.uploadTech = (req,res) => {
    console.log(req.body)
    res.redirect('/')
    const { name, description, category } = req.body
    const newTech = new Techs({
        name,
        description,
        category,
        iconImage: {
            data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
    })

    newTech
        .save()
        .then(() => console.log('succesfully save to db'))
        .catch(e => console.log(e))
}


exports.deleteTech = ( req,res ) => {
    const { id } = req.body
    Techs
    .deleteOne({_id: id})
    .then((data) => {res.redirect('/')})
    .then(() => console.log('Deleted !'))
}