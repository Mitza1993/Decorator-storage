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

    UsersController.$inject = ['$location', '$rootScope'];
    function UsersController( $location, $rootScope) {
        var vm = this;

        // vm.register = register;
        //
        // function register() {
        //     vm.dataLoading = true;
        //     UserService.Create(vm.user)
        //         .then(function (response) {
        //             if (response.success) {
        //                 FlashService.Success('Registration successful', true);
        //                 $location.path('/login');
        //             } else {
        //                 FlashService.Error(response.message);
        //                 vm.dataLoading = false;
        //             }
        //         });
        // }
    }

})();