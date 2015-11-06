var express = require('express');
// var cookieParser = require('cookieParser');
// var bodyParser = require('bodyParser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var app = express();

mongoose.connect('mongodb://localhost/buzzfeed_quiz');

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  console.log('yay!')
});




//middleware setup
app.use(express.static(__dirname + '/../client'));
// app.use(cookieParser());
// app.use(bodyParser.json());

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});