/*
    File : homeController.js
    The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('DrugsController', function($scope, $state, Drugs, DrugsService, $ionicLoading, LoadingService) {

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
            $scope.drugs = result;
            $scope.drugsDB = result;
            self.hideLoading();
        });

        $scope.searchData = '';
        DrugsService.expDate = '';

        $scope.search = function() {

            var myDrugsDataPromise = Drugs.getData();
            myDrugsDataPromise.then(function(result) {
                self.showLoading('');
                // this is only run after getData() resolves
                $scope.drugs = [];
                $scope.drugsDB = result;

                angular.forEach($scope.drugsDB, function(value, key){

                    if(value.title.indexOf($scope.searchData) == 0){
                        $scope.drugs.push(value);
                    }
                });
                self.hideLoading();
            });
        };

        $scope.cancel = function(){
            self.showLoading('');
            var myDrugsDataPromise = Drugs.getData();
            myDrugsDataPromise.then(function(result) {
                // this is only run after getData() resolves
                $scope.drugs = result;
                self.hideLoading();
            });
            $scope.searchData = '';
        }

    });