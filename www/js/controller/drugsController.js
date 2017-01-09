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
            console.log(result);
            console.log(DrugsService.drugs);
            //$scope.drugs = result;
            //$scope.drugsDB = result;
            $scope.drugs = DrugsService.drugs;
            $scope.drugsDB = DrugsService.drugs;
            $scope.searchData = '';
            DrugsService.expDate = '';
            self.hideLoading();
        });

        /*$scope.drugs = DrugsService.drugs;
        $scope.drugsDB = DrugsService.drugs;
        $scope.searchData = '';
        DrugsService.expDate = '';*/

        console.log(DrugsService.drugs);

        $scope.search = function() {

            //var myDrugsDataPromise = Drugs.getData();
            //myDrugsDataPromise.then(function(result) {
                //self.showLoading();
                // this is only run after getData() resolves
                $scope.drugs = [];
                $scope.drugsDB = DrugsService.drugs;

                angular.forEach($scope.drugsDB, function(value, key){

                    if(value.title.indexOf($scope.searchData) == 0){
                        $scope.drugs.push(value);
                    }
                });
                //self.hideLoading();
            //});
        };

        $scope.cancel = function(){
            //self.showLoading();
            //var myDrugsDataPromise = Drugs.getData();
            //myDrugsDataPromise.then(function(result) {
                // this is only run after getData() resolves
                $scope.drugs = DrugsService.drugs;
                //self.hideLoading();
            //});
            $scope.searchData = '';
        }

    });