/*
    File : homeController.js
    The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('DrugsController', function($scope, myService) {
            $scope.drugs = myService.drugs;

        $scope.search = function() {

        }

    });