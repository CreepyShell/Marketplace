const express = require('express')
var router = express.Router();
const offerCtrl = require('../controllers/offers')

router.route('/offers')
    .get(offerCtrl.getAllOffers)
    .post(offerCtrl.deleteOffer);

router.route('/offers/:offerid')
    .get(offerCtrl.getOfferById)
    .delete(offerCtrl.deleteOffer);

router.route('/offers/expensive')
    .get(offerCtrl.getAllExpensiveOffers)

router.route('/offers/cheap')
    .get(offerCtrl.getAllCheapOffers)

module.exports = router;