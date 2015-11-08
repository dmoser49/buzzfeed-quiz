var userController = require('./controllers/userController.js');


module.exports = function (app, db) {

  app.post('/api/submit', function(req, res, next) {
    userController.saveUser(req.body, res);
  })

}