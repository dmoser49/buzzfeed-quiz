var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: {
    type: 'string',
    required: true
  },
  beer: {
    type: 'string',
    required: true
  }
});

module.exports = mongoose.model('User', userSchema)