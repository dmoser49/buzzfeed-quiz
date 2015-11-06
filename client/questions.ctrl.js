(function(){
  angular.module('buzzfeed.questions', [])

  .controller('QuestionsController', QuestionsController);

  function QuestionsController($scope) {
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
      $scope.total = 0;
      for (key in $scope.movie) {
        if ($scope.answers.movie === key) {
          $scope.total += $scope.movie[key]
        };                                    
      };
      for (key in $scope.condiment) {
        if ($scope.answers.condiment === key) {
          $scope.total += $scope.condiment[key]
        };                                    
      };
      for (key in $scope.pet) {
        if ($scope.answers.pet === key) {
          $scope.total += $scope.pet[key]
        };                                    
      };
      for (key in $scope.vacation) {
        if ($scope.answers.vacation === key) {
          $scope.total += $scope.vacation[key]
        };                                    
      };
      for (key in $scope.breakfast) {
        if ($scope.answers.breakfast === key) {
          $scope.total += $scope.breakfast[key]
        };                                    
      };
      for (key in $scope.fruit) {
        if ($scope.answers.fruit === key) {
          $scope.total += $scope.fruit[key]
        };                                    
      };
      console.log($scope.total)
    };
  }

})();