/*
 File : barcodeController.js
 The BarcodeController interact with the barcode view
 */

'Use Strict';

angular.module('App')

    .controller('BarcodeController', function($scope, $cordovaBarcodeScanner, $state, $ionicHistory, myService) {

        $scope.scanBarcode = function() {
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);


                $scope.drugs = myService.drugs;

                var find = false;

                angular.forEach($scope.drugs, function(value, key){
                    if(imageData.text == value.bar_code || (value.flash_code != '' && imageData.text.indexOf(value.flash_code) !== -1)) {
                        find = true;
                        $scope.drug = value;
                        $ionicHistory.nextViewOptions({
                            disableBack: false
                        });
                        $state.go('app.drug', { 'drugId': value.id });
                    }
                }); 
                if(!find){
                    alert("Médicamment inconnu");
                }
            }, function(error) {
                console.log("An error happened -> " + error);
            });
        };

    });