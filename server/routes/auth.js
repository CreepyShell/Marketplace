const authCtrl = require('../controllers/auth');
const express = require('express')
var router = express.Router();

router.get('/login', authCtrl.login);
router.get('/register', authCtrl.register);

module.exports = router;