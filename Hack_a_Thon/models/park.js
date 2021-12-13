const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Park = new Schema(
    {
        name: { type: String, required: true },
        hours: { type: String, required: true},
        location: { type: String, required: true},
        attractionsNumber: { type: String, required: true},
        water: { type: String, required: true},
        image: { type: String, required: true },
        deaths: { type: Number, required: true },
        likes: { type: Number, required: true },
        id: { type: Number, required: false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('parks', Park)