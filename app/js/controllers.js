'use strict';

var afvolleyControllers = angular.module('afvolleyControllers', []);
var fbase = new Firebase('https://afvolley.firebaseio.com/registration');

afvolleyControllers.controller('TeamListCtrl', ['$scope', '$firebase', 
  function($scope, $firebase) {
    var fbase = new Firebase('https://afvolley.firebaseio.com/toernooien/2015/teams');

    $scope.teams = $firebase(fbase);
  }
]);

afvolleyControllers.controller('TeamSignupCtrl', ['$scope', '$firebase', 
  function($scope, $firebase) {
    var fbase = new Firebase('https://afvolley.firebaseio.com/toernooien/2015/teams');
    var teams = $scope.teams = $firebase(fbase);
    var team = $scope.team = {
      contact: {},
      players: {
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {}
      }
    }

    $scope.signup = function(team) {
      if (team.name) {
        team.signup = Date.now();
        teams.$push(team).then(function(ref) {
          console.log('Success: ', ref.key());
          // TODO show 'thank you ...' message and redirect to ...?
        }, function(error) {
          console.log("Error: ", error);
        });
      }
    };
  }
]);

afvolleyControllers.controller('TeamDetailCtrl', ['$scope', '$routeParams', '$firebase', 
  function($scope, $routeParams, $firebase) {
    var teamRef = fbase.child($routeParams.teamId);
    $scope.team = $firebase(teamRef);

    $scope.ok = function() {

    }
  }
]);