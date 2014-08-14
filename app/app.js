'use strict';

var twitter = angular.module('twitter', [
    'ui.router',
    'ui.bootstrap',
    'restangular'
]);

twitter.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('login', {
        url: '/login',
        views: {
            content: {
                templateUrl: '/components/login/index.html',
                controller: 'AuthController'
            }
        }
    }).state('users', {
        url: '/users',
        views: {
            content: {
                templateUrl: '/components/users/users.html',
                controller: 'UsersController'
            }
        }
    }).state('user', {
        url: '/users/:handle',
        views: {
            content: {
                templateUrl: '/components/users/index.html',
                controller: 'UsersController'
            }
        }
    }).state('ui-elements', {
        url: '/ui-elements',
        views: {
            content: {
                templateUrl: '/components/_ui-elements/index.html',
                controller: 'UiElementsController'
            }
        }
    });

    $urlRouterProvider.otherwise('/users');
});

twitter.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://mock.twitter.dev');
    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
        var extractedData;
        if (operation === 'getList') {
            extractedData = data.data;
        } else {
            extractedData = data.data;
        }
        return extractedData;
    });
});

twitter.run(['$rootScope', '$state', 'AuthFactory',
    function($rootScope, $state, AuthFactory) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $rootScope.hasAuth = AuthFactory.getAuth();
        });
    }
]);