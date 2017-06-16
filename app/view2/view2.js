'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
    $scope.usersData = [
        {
          'email': 'iordache.mihaialexandru@gmail.com',
          'storageName': 'mihaiiordache',
          'name': 'Mihai Iordache',
          'description': 'MTZ'
        },
        {
        'email': 'iordache.gheorghe17@gmail.com',
        'storageName': 'iordache2',
        'name': 'Gheorghe Iordache',
        'description': 'SC.ARCH.SRL'
        }
    ];
    $scope.user = $scope.usersData[0];
}]);