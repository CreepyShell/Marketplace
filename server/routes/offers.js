const express = require('express')
var router = express.Router();

const offersCtrl = require('../controllers/offers')

router.get('/', offersCtrl.offers);
router.get('/addOffer', offersCtrl.addOfferPage);
router.post('/offers', offersCtrl.addOffer);
router.delete('/offers/:id', offersCtrl.deleteOffer);

module.exports = router;
