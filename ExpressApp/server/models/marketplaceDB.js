const mongoose = require('mongoose')
const offerScheme = require('./offers');
const userScheme = require('./users')
const productScheme = require('./product');
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

function data(User, Offer, Product) {
    const user = new User({
        email: "user1@gmail.com",
        name: "username1",
        phone: 12345678,
        passwordHash: "sdajfklasdfj"
    });

    const product = new Product({
        name: "product1",
        category: "food",
        location: "Dublin",
        timeUsed: new Date(2023, 6, 11),
        amount: 1
    });

    const offer = new Offer({
        user: user,
        product: product,
        price: 57.78,
        readyToBurgain: true,
        publicateDate: new Date()
    })
    user.save();
    product.save();
    offer.save();
}
