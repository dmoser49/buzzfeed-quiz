angular.module('buzzfeed.service', [])

.factory('Questions', function($http){

  var sendEmail = function(info) {
    console.log("info: ", info)
    return $http({
      method:'POST',
      url: '/api/submit',
      data: info
    })
    .then(function(res) {
      return res.data
    })
  }

  return {
    sendEmail: sendEmail
  }

})