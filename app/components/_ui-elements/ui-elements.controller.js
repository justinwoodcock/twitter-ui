'use strict';

twitter.controller('UiElementsController', ['$scope', '$http', 'Restangular',
    function($scope, $http, Restangular) {
        // var Users = Restangular.allUrl('/', 'http://api.randomuser.me')
        // Users.getList().then(function(users){
        //     console.log(users);
        // })
        
        $scope.tweets = [
        {
            user: {
                name: 'Justin Woodcock',
                handle: '@justinkwoodcock',
                avatar: 'http://placehold.it/48x48'
            },
            date: '1h',
            content: '140 characters or less'
        },
        {
            user: {
                name: 'Chris Moore',
                handle: '@camdesigns',
                avatar: 'http://placehold.it/48x48'
            },
            date: '1h',
            content: '140 characters or less'
        }]
    }
]);