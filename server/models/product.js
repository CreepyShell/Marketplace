const mongoose = require('mongoose')
const productScheme = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
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
    imageURL: String,
    timeUsed: {
        type: Date,
        required: true,
    },
    amountmount: {
        type: Number,
        default: 0,
        min: 0,
        max: 9999
    }
});
module.exports = productScheme;