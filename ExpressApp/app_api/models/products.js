const mongoose = require('mongoose')
const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        unique: true,
        max: 50
    },
    description: {
        type: String,
        default: 'None',
        max: 300
    },
    category: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    location: {
        type: String,
        required: true,
        min: 4,
        max: 25
    },
    imageURL: {
        type: String,
        max: 200
    },
    timeUsed: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        default: 0,
        min: 0,
        max: 9999
    },
    userId: {
        type: String,
        required: true
    }
});
module.exports = productScheme;