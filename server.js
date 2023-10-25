const express = require('express')
const path = require('path')
require('./server/models/marketplaceDB');

const auth = require('./server/routes/auth');

const app = express()

app.set('views', path.join(__dirname, 'server', 'views'))
app.set('view engine', 'pug')
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('MainPage/main_page.pug')
})

app.use('/', auth)

app.listen(3000)