const mongoose = require('mongoose');
const offer = mongoose.model('Offer');


const getAllOffers = (req, res) => {
    offer.find().then((offers) => {
        if (!offers) {
            res
                .status(400)
                .json(err);
        }
        res
            .status(201)
            .json(offers);
    })
        .catch(err => {
            res.status(500).json(err)
        })
}
const deleteOffer = (req, res) => {
    let id = req.params['offerid'];
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json("Invalid id");
    }
    offer.findByIdAndDelete(id)
        .then(foundOffer => {
            if (!foundOffer) {
                res.status(404)
                    .json("Offer with provided id was not found");
                return;
            }
            res.status(200)
                .json("offer deleted");
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

const addOffer = (req, res) => {
    offer.create({
        userId: req.body.userId,
        productId: req.body.productId,
        readyToBurgain: req.body.readyToBurgain,
        price: req.body.price,
        publicateDate: req.body.publicateDate
    }).then(createdOffer => {
        if (!createdOffer) {
            res
                .status(400)
                .json(err);
        }
        res
            .status(201)
            .json(createdOffer);
    }).catch(err => {
        res.status(500).json(err)
    });
};

const getOfferById = (req, res) => {
    let id = req.params['offerid'];
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json("Invalid id");
    }
    offer.findOne({ _id: id })
        .then(foundOffer => {
            if (!foundOffer) {
                return res.status(404)
                    .json("Offer with provided id was not found");
            }
            res.status(200)
                .json(foundOffer);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

const getAllExpensiveOffers = (req, res) => {
    offer.find()
        .sort({ price: 1 })
        .then((offers) => {
            if (!offers) {
                res
                    .status(400)
                    .json(err);
            }
            res
                .status(201)
                .json(offers);
        })
        .catch(err => {
            res.status(500).json(err)
        })
}
const getAllCheapOffers = (req, res) => {
    offer.find()
        .sort({ price: 1 })
        .then((offers) => {
            if (!offers) {
                res
                    .status(400)
                    .json(err);
            }
            res
                .status(201)
                .json(offers);
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = { deleteOffer, addOffer, getAllOffers, getOfferById, getAllExpensiveOffers, getAllCheapOffers }