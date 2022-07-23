const express = require('express')
const router = express.Router()
const techController = require('../controllers/techController')

// to enable patch & delete requests
const methodOverride = require("method-override");
router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));


// post route
router.post('/upload' , techController.singleUpload, techController.uploadTech )

// delete by id /delete/:id
router.delete('/delete' , techController.deleteTech)


module.exports = router