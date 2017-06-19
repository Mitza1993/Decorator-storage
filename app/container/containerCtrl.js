/**
 * Created by miordache on 6/18/17.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContainerController', ContainerController);

    ContainerController.$inject = ['$location', '$rootScope', '$scope','$http','$firebaseObject','$firebaseArray'];
    function ContainerController( $location, $rootScope, $scope, $http, $firebaseObject, $firebaseArray) {
            console.log($scope);
    }
})();