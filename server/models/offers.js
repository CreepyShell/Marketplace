const mongoose = require('mongoose');
const userScheme = require('./users');
const productScheme = require('./product');
const offerScheme = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    user: [userScheme],
    product: [productScheme],
    price: {
        type: mongoose.Types.Decimal128,
        required: true,
        min: 0,
        max: 9999
    },
    readyToBurgain: {
        type: Boolean,
        required: true,
    },
    publicateDate: {
        type: Date,
        default: Date.now
    }
});
module.exports = offerScheme;