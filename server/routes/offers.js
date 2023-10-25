const express = require('express')
var router = express.Router();

const mainPageCtrl = require('../controllers/mainpage')
const offersCtrl = require('../controllers/offers')

router.get('/', mainPageCtrl.offers);
router.post('/offers', offersCtrl.addOffer);
router.delete('/offers/:id', offersCtrl.deleteOffer);

module.exports = router;
