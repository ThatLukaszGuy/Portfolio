const mongoose = require('mongoose')

const TechSchema = new mongoose.Schema({
    name: String,
    description: String,
    iconImage: {
        data: Buffer,
        contentType: String
    },
    category: String
})

const Techs = mongoose.model('techs', TechSchema)

module.exports = Techs