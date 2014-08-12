'use strict';

var twitter = angular.module('twitter', [
    'ui.router',
    'ui.bootstrap',
    'restangular'
]);

twitter.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('user', {
        url: '/user',
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