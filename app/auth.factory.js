/**
 * Created by miordache on 6/19/17.
 */
angular.module('app')
    .factory('Auth', function($firebaseAuth){
        var ref = firebase.auth();

        return $firebaseAuth(ref);
});