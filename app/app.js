'use strict';

var twitter = angular.module('twitter', [
    'ui.router',
    'ui.bootstrap'
]);

twitter.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('template', {
        url: '/template',
        views: {
            content: {
                templateUrl: '/components/_template/index.html',
                controller: 'TemplateController'
            }
        }
    });

    $urlRouterProvider.otherwise('/template');
});