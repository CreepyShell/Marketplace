const express = require('express');
const router = express.Router();

router.get('/', ctrl.getAllOffers);
router.post('/offers', ctrl.addOffer);
router.delete('/offers/:id', ctrl.deleteOffer);
