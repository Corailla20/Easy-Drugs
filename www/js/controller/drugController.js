/*
 File : drugController.js
 The DrugController interact with the current drug to display
 */

'Use Strict';

angular.module('App')
    .controller('DrugController', function($scope, $stateParams, Drugs, $ionicLoading, DrugsService) {

		var self = this;

		this.showLoading = function() {
			$ionicLoading.show({
				template: '<ion-spinner></ion-spinner>'
			});
		};

		this.hideLoading = function(){
			$ionicLoading.hide();
		};

		self.showLoading();
		var myDrugsDataPromise = Drugs.getData();
		myDrugsDataPromise.then(function(result) {
			// this is only run after getData() resolves
			$scope.drugs = result;
			$scope.expDate = DrugsService.expDate;

			$scope.getDrug = function() {
				angular.forEach($scope.drugs, function(value, key){
					if($stateParams.drugId == value.id) {
						$scope.drug = value;
					}
				});
			};
			$scope.getDrug();
			self.hideLoading();
		});

    });
