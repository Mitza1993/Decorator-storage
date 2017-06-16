'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
    $scope.$on('event:google-plus-signin-success', function (event,authResult) {
      console.log(authResult);
        // Send login to server or save into cookie
    });
    $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
        // Auth failure or signout detected
        console.log(authResult);
    });
}]);