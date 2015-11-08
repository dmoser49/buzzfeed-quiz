(function(){
  angular.module('buzzfeed.questions', [])

  .controller('QuestionsController', QuestionsController);

  function QuestionsController($scope, Questions) {
    $scope.email;

    $scope.answers = {
      movie: "starWars",
      condiment: "ketchup",
      pet: "cats",
      vacation: "mountains",
      breakfast: "pancakes",
      fruit: "apple"
    };

    $scope.movie = {
      starWars: 1,
      starTrek: 2,
      harryPotter: 3,
      lotr: 4
    }

    $scope.condiment = {
      ketchup: 1,
      mustard: 2,
      mayonnaise: 3,
      bbqSauce: 4
    };

    $scope.pet = {
      cats: 1,
      dogs: 2,
      fish: 3,
      snakes: 4
    };

    $scope.vacation = {
      mountains: 1,
      beach: 2,
      lake: 3
    };

    $scope.breakfast = {
      pancakes: 1,
      waffles: 2,
      frenchToast: 3
    };

    $scope.fruit = {
      apple: 1,
      orange: 2,
      pineapple: 3,
      mango: 4
    };

    $scope.submit = function(){
      var total = 0;
      for (key in $scope.movie) {
        if ($scope.answers.movie === key) {
          total += $scope.movie[key]
        };                                    
      };
      for (key in $scope.condiment) {
        if ($scope.answers.condiment === key) {
          total += $scope.condiment[key]
        };                                    
      };
      for (key in $scope.pet) {
        if ($scope.answers.pet === key) {
          total += $scope.pet[key]
        };                                    
      };
      for (key in $scope.vacation) {
        if ($scope.answers.vacation === key) {
          total += $scope.vacation[key]
        };                                    
      };
      for (key in $scope.breakfast) {
        if ($scope.answers.breakfast === key) {
          total += $scope.breakfast[key]
        };                                    
      };
      for (key in $scope.fruit) {
        if ($scope.answers.fruit === key) {
          total += $scope.fruit[key]
        };                                    
      };
      var beer;
      if (6 <= total && total < 10) {
        beer = "IPA"
      }
      if (10 <= total && total < 14) {
        beer = "Stout"
      }
      if (14 <= total && total < 18) {
        beer = "Pale Ale"
      }
      if (18 <= total && total < 22) {
        beer = "Hefeweizen"
      }
      var info = [beer, $scope.email]
      Questions.sendEmail(info)
    };
  }

})();