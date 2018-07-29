/*  REQUIRE  */
const express = require('express')
const path = require('path')
const requester = require('./lib/requests')

const bodyParser = require('body-parser');

/*  DB  */
/*
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/apple_location')
var db = mongoose.connection;
*/

/*  Routes REQUIRE  */
const data = require('./routes/datas');

var app = express();

/*  Middleware  */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*  set Public Folder to access ressources  */
app.use(express.static(path.join(__dirname, 'public')));

/*  Route setters */
app.use('/api/data', data);

app.get('/', (req, res, next) => {
  res.send(requester.statRequest());
})

// 404 Page
app.use((req, res, next) => {
    res.status(404).send('No page found, come back to safety to /')
});

app.listen(3000);
console.log('====================================');
console.log('App running on port 3000');
console.log('====================================');

module.exports = app