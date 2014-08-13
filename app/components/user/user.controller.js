'use strict';

twitter.controller('UserController', ['$scope', 'Restangular', '$stateParams',

    function($scope, Restangular, $stateParams) {

        var Users = Restangular.all('users');
        Users.getList().then(function(users) {
            $scope.users = users.plain();
            $scope.usersEntity = users;
            console.log($scope.users);

            $scope.user = getUser($stateParams.handle);
            $scope.tweets = getTweets($scope.user.id);

        })

        function getUser(handle) {
            for (var i = 0; $scope.users.length > i; i++) {
                if ($scope.users[i].handle === handle) {
                    return $scope.users[i];
                }
            }
        }

        function getTweets(userId) {
            // var Tweets = Restangular.one('users/').one(userId + '/').one('tweets');
            // Tweets.getList().then(function(data) {
            //     console.log(data);
            //     return data;
            // })
        }

    }
]);