const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: {
        info: String,
        reason: String,
        difficulties: String
    },
    coverImage: {
        data: Buffer,
        contentType: String
    },
    links: {
        github: String,
        deployment:String
    },
    otherImages: [{
        data: Buffer,
        contentType: String
    }],
    tags: Array
})

const Projects = mongoose.model('projects', ProjectSchema)

module.exports = Projects