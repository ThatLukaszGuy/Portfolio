import { Schema, model,models, mongoose } from 'mongoose'

const TechSchema = new Schema({
    name: String,
    description: String,
    iconImage: {
        data: Buffer,
        contentType: String
    },
    category: String
})

const Techs = models['techs'] || model('techs', TechSchema)

export default Techs