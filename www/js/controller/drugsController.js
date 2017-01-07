/*
    File : homeController.js
    The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('DrugsController', function($scope, $state, Drugs) {

        $scope.drugs = Drugs.drugs;
        $scope.drugsDB = Drugs.drugs;
        $scope.searchData = '';
        Drugs.expDate = '';

        $scope.search = function() {
            $scope.drugsDB = Drugs.drugs;
            $scope.drugs = [];
            angular.forEach($scope.drugsDB, function(value, key){
                if(value.title.indexOf($scope.searchData) == 0){
                    $scope.drugs.push(value);                    
                }
            });
        }

        $scope.cancel = function(){
            $scope.searchData = '';
            $scope.drugs = Drugs.drugs;
        }

    });