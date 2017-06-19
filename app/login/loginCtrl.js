/**
 * Created by miordache on 6/17/17.
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['Auth', '$location', '$rootScope', '$scope','$http','$firebaseObject','$firebaseArray'];
    function LoginController( Auth, $location, $rootScope, $scope, $http, $firebaseObject, $firebaseArray) {

        var vm = this;
        // vm.currentUser = {};
        // vm.usersList = {};
        $scope.provider = '';
        $scope.authData;
        $scope.login = login;
        $scope.logout = logout;

        Auth.$onAuthStateChanged(function(authData) {
            $scope.authData = authData;
            if(authData) {
                $scope.cachedProfile = getCachedProfile($scope.authData);
                $scope.cachedProfile.password = $scope.cachedProfile.uid;
                createUser();
            }
            console.log(vm.authData);
        });


        function login(provider) {
            Auth.$signInWithPopup(provider, {scope :'email'})
                .catch(function(error) {
                    console.log(error);
                })
            }
        }

        function logout() {
            Auth.$signOut();
        }

        function createUser() {
            ref.createUser($scope.cachedProfile, function(error, userData) {
                if (error) {
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            console.log("The new user account cannot be created because the email is already in use.");
                            break;
                        case "INVALID_EMAIL":
                            console.log("The specified email is not a valid email.");
                            break;
                        default:
                            console.log("Error creating user:", error);
                    }
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });
        }
    function getCachedProfile(param) {
        // $scope.authData = param;
        if(!param) return "";

        switch(param.providerData[0].providerId) {
            case "github":
                return param.github.cachedUserProfile;
                break;
            case "facebook":
                return param.facebook.cachedUserProfile;
                break;
            case "google.com":
                return param.providerData[0];
                break;
            default:
                return "";
        }
    }




        // initUsers();
        //
        //
        // function initUsers() {
        //
        //     var ref = firebase.database().ref();
        //
        //     var obj = $firebaseObject(ref);
        //
        //     // to take an action after the data loads, use the $loaded() promise
        //     obj.$loaded().then(function() {
        //         vm.usersList = obj.usersData;
        //     });
        // }


})();