'use strict';

angular.module('myApp.admin-view', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin-view', {
            templateUrl: 'admin-view/admin-view.html',
            controller: 'AdminViewCtrl'
        });
    }])

    .controller('AdminViewCtrl', ['$scope',function($scope) {

    }]);