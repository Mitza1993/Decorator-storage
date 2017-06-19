/**
 * Created by miordache on 6/17/17.
 */

/**
 * Created by miordache on 6/17/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['$location', '$rootScope', '$scope'];
    function UsersController( $location, $rootScope, $scope) {
        var vm = this;
        console.log("Users Controller")
    }

})();