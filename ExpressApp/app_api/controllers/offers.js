const mongoose = require('mongoose');
const offer = mongoose.model('Offer');


const getAllOffers = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });

}
const deleteOffer = (req, res) => {
    res
        .status(200)
        .json({ "status": "success" });
}

const addOffer = (req, res) => {
}

const getOfferById = (req, res) => {
    offer.findById(req.params['offerid'])
        .then((offer, err) => {
            res.status(200)
                .json(offer);
        })
}
const getAllExpensiveOffers = (req, res) => {
}
const getAllCheapOffers = (req, res) => {
}

module.exports = { deleteOffer, addOffer, getAllOffers, getOfferById, getAllExpensiveOffers, getAllCheapOffers }