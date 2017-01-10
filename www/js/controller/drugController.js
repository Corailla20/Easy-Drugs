/*
 File : drugController.js
 The DrugController interact with the current drug to display
 */

'Use Strict';

angular.module('App')
    .controller('DrugController', function($scope, $stateParams, $ionicLoading, DrugsService, Drugs) {

    	var self = this;

		this.showLoading = function(message) {
            $ionicLoading.show({
                template: '<ion-spinner>'+message+'</ion-spinner>'
            });
        };

        this.hideLoading = function(){
            $ionicLoading.hide();
        };

		$scope.drugs = DrugsService.drugs;
		$scope.expDate = DrugsService.expDate;
		$scope.getDrug = function() {

            self.showLoading('');

			var myDrugDataPromise = Drugs.getDrugWithId($stateParams.drugId);
            myDrugDataPromise.then(function(result) {
                $scope.drug = result[0];
            });

            self.hideLoading();

		};
		$scope.getDrug();
    });
