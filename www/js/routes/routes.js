/*
    File : routes.js
    Here defined all routes application.
    This config can associate an url with a controller and a templateUrl
*/

angular.module('app.routes', [])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppController'
            })

            .state('app.barcode', {
                url: '/barcode',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/barcode.html',
                        controller: 'BarcodeController'
                    }
                }
            })

            .state('app.start', {
                url: '/start',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/start.html',
                        controller: 'StartController'
                    }
                }
            })

            .state('app.textbox', {
                url: '/textbox',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/textbox.html',
                        controller: 'TextboxController'
                    }
                }
            })
            .state('app.drugs', {
                url: '/drugs',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/drugs.html',
                        controller: 'DrugsController'
                    }
                }
            })

            .state('app.drug', {
                url: '/drugs/:drugId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/drug.html',
                        controller: 'DrugController'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
