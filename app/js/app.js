'use strict';

var afvolleyApp = angular.module("afvolleyApp", [
  'afvolleyControllers',
  'relativeDate',
  'firebase',
  'ngRoute',
  'ui.bootstrap.showErrors'
]);

afvolleyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
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
        redirectTo: '/home'
      });
  }
]);

afvolleyApp.config(['showErrorsConfigProvider',
  function(showErrorsConfigProvider) {
    showErrorsConfigProvider.showSuccess(true);
  }
]);

// i18n -> Dutch
afvolleyApp.value('relativeDateTranslations', {
  just_now: 'zojuist',
  seconds_ago: '{{time}} seconden geleden',
  a_minute_ago: 'een minuut geleden',
  minutes_ago: '{{time}} minuten geleden',
  an_hour_ago: 'een uur geleden',
  hours_ago: '{{time}} uren geleden',
  a_day_ago: 'gisteren',
  days_ago: '{{time}} dagen geleden',
  a_week_ago: 'een week geleden',
  weeks_ago: '{{time}} weken geleden',
  a_month_ago: 'een maand geleden',
  months_ago: '{{time}} maanden geleden',
  a_year_ago: 'een jaar geleden',
  years_ago: '{{time}} jaren geleden',
  over_a_year_ago: 'meer dan een jaar geleden',
  seconds_from_now: 'over {{time}} seconden',
  a_minute_from_now: 'over een minuut',
  minutes_from_now: 'over {{time}} minuten',
  an_hour_from_now: 'over een uur',
  hours_from_now: 'over {{time}} uren',
  a_day_from_now: 'morgen',
  days_from_now: 'over {{time}} dagen',
  a_week_from_now: 'over een week',
  weeks_from_now: 'over {{time}} weken',
  a_month_from_now: 'over een maand',
  months_from_now: 'over {{time}} maanden',
  a_year_from_now: 'over een jaar',
  years_from_now: 'over {{time}} jaren',
  over_a_year_from_now: 'over meer dan een jaar'
});