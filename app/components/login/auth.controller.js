'use strict';

twitter.controller('AuthController', ['$scope', 'Restangular', '$state', 'AuthFactory',
    function($scope, Restangular, $state, AuthFactory) {

        //$scope.hasAuth = AuthFactory.getAuth();
        //console.log($scope.hasAuth)

        var Users = Restangular.all('users');
        Users.getList().then(function(users) {
            $scope.users = users.plain();
            $scope.usersEntity = users;
        })

        $scope.checkValidation = function() {
            for (var i = 0; $scope.users.length > i; i++) {
                if ($scope.users[i].email === $scope.emailAddress) {
                    $scope.twitterUser = $scope.users[i];
                    AuthFactory.setAuth(true);
                    $scope.hasAuth = AuthFactory.getAuth();
                    $state.go('users');
                }
            }
        }

        $scope.logout = function() {
            $scope.twitterUser = 'undefined';
            AuthFactory.setAuth(false);
            $scope.hasAuth = AuthFactory.getAuth();
            $state.go('login');
        }
    }
]);