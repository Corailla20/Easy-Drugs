/*
 File : barcodeController.js
 The BarcodeController interact with the barcode view
 */

'Use Strict';

angular.module('App')

    .controller('BarcodeController', function($scope, $cordovaBarcodeScanner, $state, $ionicHistory, myService) {

        $scope.scanBarcode = function() {
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                //alert(imageData.text);
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
                        if(imageData.text != value.bar_code) {  // -> This is a flash code
                            // Get experitation date from flash code
                            var expDateTmp = imageData.text.substring(19,25);
                            myService.expDate = "Date d'expiration : " + /*expDateTmp.substring(4,6) + "/" +*/ expDateTmp.substring(2,4) + "/" + expDateTmp.substring(0,2);
                            //alert(myService.expDate);
                        }
                        else {
                            myService.expDate = '';
                        }

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