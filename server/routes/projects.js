const express = require('express')
const router = express.Router()
const projectController = require('../controllers/projectController')

// to enable patch & delete requests
const methodOverride = require("method-override");
router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));


// post route
router.post('/upload' , projectController.fieldUpload , projectController.uploadProject )

router.get('/upload' , (req,res) => res.send('test'))
// delete by id /delete/:id
router.delete('/delete' , projectController.deleteProject)


module.exports = router