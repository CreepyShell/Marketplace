const express = require('express')
var router = express.Router();
const userCtrl = require("../controllers/auth")

router.route('/users')
    .post(userCtrl.register)
    .get(userCtrl.login);

module.exports = router;