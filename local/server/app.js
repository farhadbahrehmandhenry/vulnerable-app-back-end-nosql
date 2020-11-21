var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const apiRouter = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/api/vulnerable', apiRouter);

mongoose.connect('mongodb://localhost/dvna', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log( 'Connected to mpngodb'))
.catch(err => console.log( err ));;

app.listen(3100, function () {
  console.log('Express app listening on port 3100!');
});