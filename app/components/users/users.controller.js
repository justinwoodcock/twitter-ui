'use strict';

twitter.controller('UsersController', ['$scope', 'Restangular', '$stateParams',

    function($scope, Restangular, $stateParams) {

        //$scope.hasAuth = AuthFactory.getAuth();

        var Users = Restangular.all('users');
        Users.getList().then(function(users) {
            $scope.users = users.plain();
            $scope.usersEntity = users;
            console.log($scope.users);
            getUser($stateParams.handle);
        })

        function getUser(handle) {
            for (var i = 0; $scope.users.length > i; i++) {
                if ($scope.users[i].handle === handle) {
                    $scope.user = $scope.users[i];
                    getUserTweets($scope.user.id);
                }
            }
        }

        function getUserTweets(userId) {
            console.log(userId)
            var Tweets = Restangular.all('users/' + userId + '/tweets');
            Tweets.getList().then(function(data) {
                console.log(data)
                $scope.tweetsEntity = data;
                $scope.tweets = data.plain();
            })
        }

        $scope.reply = function() {

        }

        $scope.retweet = function() {

        }

        $scope.favorite = function() {

        }

    }
]);