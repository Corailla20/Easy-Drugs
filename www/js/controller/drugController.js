/*
 File : drugController.js
 The DrugController interact with the current drug to display
 */

'Use Strict';

angular.module('App')
    .controller('DrugController', function($scope, $stateParams, myService) {		
		
		$scope.drugs = myService.drugs;

		$scope.getDrug = function() {
			angular.forEach($scope.drugs, function(value, key){
				if($stateParams.drugId == value.id) {
					console.log('id: ' + value.id + ' - ' + value.title);
					$scope.drug = value;
					console.log(value.title)
				}
			});
		};

		$scope.getDrug();

    });
