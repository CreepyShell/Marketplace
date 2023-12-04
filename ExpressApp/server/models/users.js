const mongoose = require('mongoose')
const userScheme = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 40
    },
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    phone: {
        type: Number,
        unique: true,
        min: 1000
    },
    passwordHash: {
        type: String,
        required: true,
        min: 8
    }
});
module.exports = userScheme;