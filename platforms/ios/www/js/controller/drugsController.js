/*
    File : homeController.js
    The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('DrugsController', function($scope) {
        $scope.drugs = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    });