var mongoose = require('mongoose');

var AnswersSchema = new mongoose.Schema({
  email: {
    type: string,
    required: true
  },
  answers: {
    type: object,
    required: true
  }
})