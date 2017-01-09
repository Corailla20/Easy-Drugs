/*
 File : homeController.js
 The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('DrugsController', function($scope, $state, Drugs, DrugsService, $ionicLoading) {

        var self = this;

        this.showLoading = function(message) {
            $ionicLoading.show({
                template: '<ion-spinner>'+message+'</ion-spinner>'
            });
        };

        this.hideLoading = function(){
            $ionicLoading.hide();
        };


        self.showLoading('');
        var myDrugsDataPromise = Drugs.getData();
        myDrugsDataPromise.then(function(result) {
            // this is only run after getData() resolves
            DrugsService.drugs = result;

            $scope.drugs = DrugsService.drugs;
            $scope.drugsDB = DrugsService.drugs;
            $scope.searchData = '';
            DrugsService.expDate = '';

            self.hideLoading();
        });

        console.log(DrugsService.drugs);

        $scope.search = function() {
            $scope.drugs = [];
            $scope.drugsDB = DrugsService.drugs;

            angular.forEach($scope.drugsDB, function(value, key){

                if(value.title.indexOf($scope.searchData) == 0){
                    $scope.drugs.push(value);
                }
            });
        };

        $scope.cancel = function(){
            $scope.drugs = DrugsService.drugs;
            $scope.searchData = '';
        }

    });