var User = require('../models/userModel');

module.exports = {

  saveUser: function(req, res) {
    var user = new User({
      email: req.body.email,
      beer: req.body.beer
    })
    user.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
        res.send("Success!")
      }
    })
  }

}