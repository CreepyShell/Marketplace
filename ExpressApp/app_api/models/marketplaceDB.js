const mongoose = require('mongoose')
const offerScheme = require('./offers');
const userScheme = require('./users')
const productScheme = require('./products');
const dbURI =
    "mongodb+srv://user:1234@cluster0.foqsfra.mongodb.net/marketplace";
try {
    mongoose.connect(
        dbURI,
        { useNewUrlParser: true, useUnifiedTopology: true }).then(
            () => { console.log(" Mongoose is connected") },
            err => { console.log(err) }
        );
    mongoose.model('Offer', offerScheme);
    mongoose.model('User', userScheme);
    mongoose.model('Product', productScheme);
}
catch (e) {
    console.log("could not connect");
}
