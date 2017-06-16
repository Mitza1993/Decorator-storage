'use strict';

angular.module('myApp.admin-view', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin-view', {
            templateUrl: 'admin-view/admin-view.html',
            controller: 'AdminViewCtrl'
        });
    }])

    .controller('AdminViewCtrl', ['$scope',function($scope) {

        $scope.usersData = [
            {
                email: 'iordache.mihaialexandru@gmail.com',
                storageName: 'mihaiiordache',
                name: 'Mihai Iordache',
                description: 'MTZ',
                selected: false
            },
            {
                email: 'iordache.gheorghe17@gmail.com',
                storageName: 'iordache2',
                name: 'Gheorghe Iordache',
                description: 'SC.ARCH.SRL',
                selected:false
            }
        ]
    }]);