'use strict';

var afvolleyApp = angular.module("afvolleyApp", [
  'afvolleyControllers',
  'relativeDate',
  'firebase',
  'ngRoute'
  ]);

afvolleyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/teams', {
        templateUrl: 'partials/team-list.html',
        controller: 'TeamListCtrl'
      }).
      when('/teams/:teamId', {
        templateUrl: 'partials/team-detail.html',
        controller: 'TeamDetailCtrl'
      }).
      when('/aanmelden', {
        templateUrl: 'partials/team-signup.html',
        controller: 'TeamSignupCtrl'
      }).
      otherwise({
        redirectTo: '/teams'
      });
  }]);
