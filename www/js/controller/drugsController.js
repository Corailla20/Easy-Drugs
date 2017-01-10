/*
 File : homeController.js
 The DrugsController interact with the drugs list view
 */

'Use Strict';

angular.module('App')

    .controller('DrugsController', function($scope, Drugs, DrugsService, $ionicLoading) {

        var self = this;

        /**
         * Function to display a spinner for loading with a message
         * @param message
         */
        this.showLoading = function(message)
        {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner><p>'+message+'</p>'
            });
        };

        /**
         * Function to hide spinner loading
         */
        this.hideLoading = function()
        {
            $ionicLoading.hide();
        };

        self.showLoading('');
        var myDrugsDataPromise = Drugs.getData();
        myDrugsDataPromise.then(function(result)
        {
            // this is only run after getData() resolves
            DrugsService.drugs = result;
            $scope.drugs = DrugsService.drugs;
            $scope.drugsDB = DrugsService.drugs;
            $scope.searchData = '';
            DrugsService.expDate = '';

            self.hideLoading();
        });

        /**
         * $scope function to search a drug into drugs list
         */
        $scope.search = function()
        {
            $scope.drugs = [];
            $scope.drugsDB = DrugsService.drugs;
 
            angular.forEach($scope.drugsDB, function(value){

                if(value.title.indexOf($scope.searchData) == 0){
                    $scope.drugs.push(value);
                }
            });
        };

        /**
         * $scope function to control the cancel button
         */
        $scope.cancel = function()
        {
            $scope.drugs = DrugsService.drugs;
            $scope.searchData = '';
        }

    });