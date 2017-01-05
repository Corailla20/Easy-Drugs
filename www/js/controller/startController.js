/*
 File : startController.js
 The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('StartController', function($scope, $state, $ionicHistory) {

        //myService.expDate = '';

        $scope.clickBarcodeScanButton = function() {

            $ionicHistory.nextViewOptions({
                disableBack: false
            });
            $state.go('app.barcode');

        };

        $scope.clickTextboxScanButton = function() {

            $ionicHistory.nextViewOptions({
                disableBack: false
            });
            $state.go('app.textbox');
        };
    });


