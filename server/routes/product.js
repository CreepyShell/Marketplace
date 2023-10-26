const express = require('express');
var router = express.Router();
const prodCtrl = require('../controllers/product')

router.post('/offers/products', prodCtrl.addProduct);
router.delete('/offers/products/:id', prodCtrl.deleteProduct);

module.exports = router;