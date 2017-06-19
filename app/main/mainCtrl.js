/**
 * Created by miordache on 6/17/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['Auth', '$location', '$rootScope', '$scope','$http','$firebaseObject','$firebaseArray','$firebaseAuth'];
    function MainController( Auth, $location, $rootScope, $scope, $http, $firebaseObject, $firebaseArray, $firebaseAuth) {

        var auth = $firebaseAuth();

        var vm = this;
        // vm.currentUser = {};
        // vm.usersList = {};
        vm.provider = '';
        vm.authData;
        vm.cachedProfile = {};
        vm.currentTab = {};
        vm.currentTab = {};
        vm.login = login;
        vm.signOut = signOut;


        initUsers();


        Auth.$onAuthStateChanged(function (authData) {
            vm.authData = authData;
        });


        function login(provider) {
            auth.$signInWithPopup(provider, {scope: 'email'})
                .then(function(firebaseUser) {
                    var currentUser = _.find(vm.usersList, 'email', firebaseUser.email)
                    if(currentUser) {
                        if(currentUser.isAdmin) {
                            vm.currentTab.template = '../users/users.view.html';
                        } else {
                            vm.currentTab.template = '../container/container.view.html'
                            // $location.path('/container');
                        }
                    } else {
                        alert("No acces to this app");
                        auth.$signOut();
                    }
                    console.log("Signed in as:", firebaseUser.uid);
                }).catch(function(error) {
                console.log("Authentication failed:", error);
            });
        }

        function signOut() {
            auth.$signOut();
        }


        function initUsers() {

            var ref = firebase.database().ref();

            var obj = $firebaseObject(ref);

            // to take an action after the data loads, use the $loaded() promise
            obj.$loaded().then(function() {
                vm.usersList = obj.usersData;
            });
        }

}

})();