var app = angular.module("afvolley", ['firebase']);

function MyController($scope, $firebase) {
  var ref = new Firebase('https://afvolley.firebaseio.com/chat');
  $scope.messages = $firebase(ref);
  $scope.addMessage = function(e) {
    if (e.keyCode === 13) {
      $scope.messages.$add({from: $scope.name, body: $scope.msg});
      $scope.msg = '';
    }
  };
}