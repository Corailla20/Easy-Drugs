/*
 File : drugController.js
 The DrugController interact with the current drug to display or scanned drug
 */

'Use Strict';

angular.module('App')

    .controller('DrugController', function($scope, $stateParams, $ionicLoading, DrugsService, Drugs) {

        var self = this;

        $scope.drugs = DrugsService.drugs;
        $scope.expDate = DrugsService.expDate;

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

        /**
         * $scope function to get drug object to display
         */
		$scope.getDrug = function()
        {
            self.showLoading('');

			var myDrugDataPromise = Drugs.getDrugWithId($stateParams.drugId);
            myDrugDataPromise.then(function(result) {
                $scope.drug = result[0];
            });

            self.hideLoading();
		};

        $scope.getDrug();
        DrugsService.expDate='';


    });
