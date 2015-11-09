'use strict'

var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var db = mongoose.connection;
var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/buzzfeed_quiz');

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  console.log('yay!')
});

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json())

require('./routes.js')(app)

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});