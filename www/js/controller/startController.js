/*
 File : startController.js
 The HomeController interact with the home view
 */

'Use Strict';

angular.module('App')

    .controller('StartController', function($scope, $state, $ionicHistory) {

        /**
         * Controller barcode button
         */
        $scope.clickBarcodeScanButton = function() {

            $ionicHistory.nextViewOptions({
                disableBack: false
            });
            $state.go('app.barcode');

        };

        /**
         * Controller text box scan button
         */
        $scope.clickTextboxScanButton = function() {

            $ionicHistory.nextViewOptions({
                disableBack: false
            });
            $state.go('app.textbox');
        };
    });


