const express = require('express')
var router = express.Router();
const offerCtrl = require('../controllers/offers')

router.route('/offers')
    .get(offerCtrl.getAllOffers)
    .post(offerCtrl.addOffer);

router.route('/offersWithDetails')
    .get(offerCtrl.getAllOffersWithDetails);

router.route('/offers/:offerid')
    .get(offerCtrl.getOfferById)
    .delete(offerCtrl.deleteOffer);

router.route('/offers/sort/expensive')
    .get(offerCtrl.getAllExpensiveOffers)

router.route('/offers/sort/cheap')
    .get(offerCtrl.getAllCheapOffers)

module.exports = router;