/*
    File : homeController.js
    The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('DrugsController', function($scope, $state, myService) {

        $scope.drugs = myService.drugs;
        $scope.drugsDB = myService.drugs;
        $scope.searchData = '';

        $scope.search = function() {
            $scope.drugsDB = myService.drugs;
            $scope.drugs = [];
            angular.forEach($scope.drugsDB, function(value, key){
                if(value.title.indexOf($scope.searchData) == 0){
                    $scope.drugs.push(value);                    
                }
            });
        }

        $scope.cancel = function(){
            $scope.searchData = '';
            $scope.drugs = myService.drugs;
        }

    });