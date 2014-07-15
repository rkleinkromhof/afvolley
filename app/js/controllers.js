'use strict';

var afvolleyControllers = angular.module('afvolleyControllers', []);

afvolleyControllers.controller('TeamListCtrl', ['$scope', '$firebase', 
  function($scope, $firebase) {
    var fbase = new Firebase('https://afvolley.firebaseio.com/registration');
    $scope.registrations = $firebase(fbase);
  }
]);

afvolleyControllers.controller('TeamRegistrationCtrl', ['$scope', '$firebase', 
  function($scope, $firebase) {
    var fbase = new Firebase('https://afvolley.firebaseio.com/registration');
    $scope.registrations = $firebase(fbase);
    $scope.registration = {
      contact: {},
      players: [{},{},{},{},{},{}]
    }

    $scope.register = function(registration) {
      if (registration.teamname) {
        registration.registered_on = Date.now();
        $scope.registrations.$add(registration);
        // TODO show 'thank you ...' message and redirect to ...?
      }
    };
  }
]);