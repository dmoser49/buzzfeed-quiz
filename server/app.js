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

app.use('/', express.static(__dirname + '/../client'));
app.use(bodyParser.json())

require('./routes.js')(app)



app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});