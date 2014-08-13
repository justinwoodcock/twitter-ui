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
                controller: 'LoginController'
            }
        }
    }).state('user', {
        url: '/user/:handle',
        views: {
            content: {
                templateUrl: '/components/user/index.html',
                controller: 'UserController'
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

    $urlRouterProvider.otherwise('/ui-elements');
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