'use strict';

var afvolleyControllers = angular.module('afvolleyControllers', []);

afvolleyControllers.controller('TeamListCtrl', ['$scope', '$firebase', 
  function($scope, $firebase) {
    var ref = new Firebase('https://afvolley.firebaseio.com/toernooien/2015/teams');
    var sync = $firebase(ref);

     $scope.teams = sync.$asArray();
  }
]);

afvolleyControllers.controller('TeamSignupCtrl', ['$scope', '$firebase', 
  function($scope, $firebase) {
    var fbase = new Firebase('https://afvolley.firebaseio.com/toernooien/2015/teams');
    var teams = $scope.teams = $firebase(fbase);
    var team = $scope.team = {
      contact: {},
      players: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {}
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
    var fbase = new Firebase('https://afvolley.firebaseio.com/toernooien/2015/teams');
    var teamRef = fbase.child($routeParams.teamId);
    var sync = $firebase(teamRef);
    $scope.team = sync.$asObject();

    $scope.ok = function() {

    }
  }
]);