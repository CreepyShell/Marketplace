const express = require('express')
var router = express.Router();
const productCtrl = require("../controllers/products");

router.route('/users/:id/products')
    .get(productCtrl.getAllUserProducts);

router.route('/products/:id')
    .delete(productCtrl.deleteUserProduct);

router.route('/products/')
    .post(productCtrl.createProduct)

module.exports = router;