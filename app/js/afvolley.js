var app = angular.module("afvolley", ['firebase']);

function RegistrationController($scope, $firebase) {
  var ref = new Firebase('https://afvolley.firebaseio.com/registration');
  $scope.registrations = $firebase(ref);

  function resetForm() {
    $scope.registration = {
  	  contact: {},
  	  players: [{},{},{}]
  	}
  }
  resetForm();
  $scope.reset = resetForm;
  $scope.register = function(registration) {
    if (registration.teamname) {
    	registration.registered_on = Date.now();
      $scope.registrations.$add(registration);
      $scope.reset();
    }
  };
}