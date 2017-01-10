/*
 File : drugController.js
 The DrugController interact with the current drug to display
 */

'Use Strict';

angular.module('App')
    .controller('DrugController', function($scope, $stateParams, $ionicLoading, DrugsService,Drug) {

		$scope.drugs = DrugsService.drugs;
		$scope.expDate = DrugsService.expDate;
		$scope.getDrug = function() {
			var myDrugDataPromise = Drug.getDrugWithId($stateParams.drugId);
            myDrugDataPromise.then(function(result) {
                $scope.drug = result[0];
            });
		};
		$scope.getDrug();
    });
