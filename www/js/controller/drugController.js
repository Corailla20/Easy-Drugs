/*
 File : drugController.js
 The DrugController interact with the current drug to display
 */

'Use Strict';

angular.module('App')
    .controller('DrugController', function($scope, $stateParams, myService) {		
		
		$scope.drugs = myService.drugs;
		$scope.expDate = myService.expDate;

		$scope.getDrug = function() {
			angular.forEach($scope.drugs, function(value, key){
				if($stateParams.drugId == value.id) {
					$scope.drug = value;
				}
			});
		};

		$scope.getDrug();

    });
