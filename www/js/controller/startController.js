/*
 File : startController.js
 The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('StartController', function($scope, $state, $ionicHistory) {

        $scope.clickBarcodeScanButton = function() {

            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.barcode');

        };

        $scope.clickTextboxScanButton = function() {

            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.textbox');
        };
    });


