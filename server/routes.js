var userController = require('./controllers/userController.js');
var email = require('./emailer.js');


module.exports = function (app, db) {

  app.post('/api/submit', function(req, res, next) {
    email(req);
    userController.saveUser(req, res);
  })

}