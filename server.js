const express = require('express')
const path = require('path')
const db = require('./server/models/marketplaceDB');


const auth = require('./server/routes/auth');
const offers = require('./server/routes/offers');
const products = require('./server/routes/product');

const apiRoutes = require('./app_api/routes');

const app = express()

app.set('views', path.join(__dirname, 'server', 'views'))
app.set('view engine', 'pug')
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', auth)
app.use('/', offers)
app.use('/', products)

app.use('/api', apiRoutes);

app.listen(3000)