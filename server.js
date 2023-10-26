const express = require('express')
const path = require('path')
require('./server/models/marketplaceDB');

const auth = require('./server/routes/auth');
const offers = require('./server/routes/offers');
const products = require('./server/routes/product')

const app = express()

app.set('views', path.join(__dirname, 'server', 'views'))
app.set('view engine', 'pug')
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', auth)
app.use('/', offers)
app.use('/', products)

app.listen(3000)