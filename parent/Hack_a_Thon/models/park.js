const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Park = new Schema(
    {
        name: { type: String, required: true },
        hours: { type: String, required: false},
        location: { type: String, required: true},
        attractionsNumber: { type: String, required: false},
        water: { type: String, required: false},
        image: { type: String, required: true },
        deaths: { type: Number, required: false },
        likes: { type: Number, required: false },
        id: { type: Number, required: false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('parks', Park)