import { Schema, model,models } from 'mongoose'


const ProjectSchema = new Schema({
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

const Projects = models['projects'] || model('projects', ProjectSchema)
export default Projects