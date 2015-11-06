(function(){

  angular.module('buzzfeed.questionsService', [])

  .factory('Questions', Questions)

  function Questions($http) {

    function sendEmail(email, total) {
      console.log('sendingEmail')
    }
  }

  return {
    sendEmail: sendEmail
  }
})