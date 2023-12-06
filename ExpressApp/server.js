const express = require('express')
const path = require('path')
const db = require('./app_api/models/marketplaceDB');


const auth = require('./server/routes/auth');
const offers = require('./server/routes/offers');
const products = require('./server/routes/product');

const apiProductRoutes = require('./app_api/routes/products');
const apiMainRoutes = require('./app_api/routes/index');
const apiUserRoutes = require('./app_api/routes/users');

const app = express()

app.set('views', path.join(__dirname, 'server', 'views'))
app.set('view engine', 'pug')
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/', auth)
app.use('/', offers)
app.use('/', products)

app.use('/api', apiProductRoutes);
app.use('/api', apiMainRoutes);
app.use('/api', apiUserRoutes);

app.listen(3000)