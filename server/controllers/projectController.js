const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const Projects = require('../models/projectModel')
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

    // multer config for single file + array of files
exports.fieldUpload = upload.fields([
    {
        name: 'coverImage', maxCount: 1
    },
    {
        name: 'otherImages', maxCount: 5
    }
    
])

    // save to db
exports.uploadProject = (req, res) => {
    console.log(req.body, req.files)
    const { name, info, reason, difficulties, github, deployment, tags } = req.body
    res.redirect('/')
    const newProject = new Projects({
        name,
        description :{
            info,
            reason,
            difficulties
        },
        coverImage: {
            data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.files['coverImage'][0].filename)),
            contentType: 'image/png'
        },
        links: {
            github,
            deployment
        },
        tags,
        otherImages: req.files['otherImages'].map(img => {
         return {
            data: fs.readFileSync(path.join(__dirname + '/../uploads/' + img.filename)),
            contentType: 'image/png'
        }
        })
        
    })

    newProject
        .save()
        .then(() => console.log('succesfully save to db'))
        .catch(e => console.log(e))
}

// delete
exports.deleteProject = (req,res) => {
    const { id } = req.body
    Projects
    .deleteOne({_id: id})
    .then((data) => {res.redirect('/')})
    .then(() => console.log('Deleted !'))
}



