/*
 File : drugController.js
 The DrugController interact with the current drug to display
 */

'Use Strict';

angular.module('App')
    .controller('DrugController', function($scope, $stateParams, Drugs, $ionicLoading, DrugsService) {

		$scope.drugs = DrugsService.drugs;
		$scope.expDate = DrugsService.expDate;

		$scope.getDrug = function() {
			angular.forEach($scope.drugs, function(value, key){
				if($stateParams.drugId == value.id) {
					$scope.drug = value;
				}
			});
		};
		$scope.getDrug();
    });
