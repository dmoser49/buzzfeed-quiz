var nodemailer = require('nodemailer');


module.exports = function(req) {

  console.log('trying to send email!', req.body)

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'danielmoser49@gmail.com',
      pass: 'longhorn49'
    }
  });

  console.log('created')

  var mailOptions = {
    from: 'Beer Drinking Results! <danielmoser49@gmail.com>',
    to: req.body.email,
    subject: 'What Kind of Beer Drinker Are You Results!',
    text: 'You definitely prefer ' + req.body.beer + "'s. \n \nAlso you are cute ;)"
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});



};

