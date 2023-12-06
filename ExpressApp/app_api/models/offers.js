const mongoose = require('mongoose');
const offerScheme = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true,
        validate: {
            validator: (pr) => pr > 0 && pr < 9999
        }
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