const express = require('express')
var router = express.Router();
const productCtrl = require("../controllers/product");

router.route('/users/:id/products')
    .get(productCtrl.getAllUserProducts);

router.route('/users/:id/products/:id')
    .delete(productCtrl.deleteUserProducts)
    .put(productCtrl.updateUserProducts);

module.exports = router;