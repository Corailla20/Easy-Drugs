/*
 File : barcodeController.js
 The BarcodeController interact with the barcode view
 */

'Use Strict';

angular.module('App')

    .controller('BarcodeController', function($scope, $cordovaBarcodeScanner, $state, $ionicHistory, Drugs,DrugsService, $ionicLoading) {

        var self = this;

        this.showLoading = function() {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner>'
            });
        };

        this.hideLoading = function(){
            $ionicLoading.hide();
        };

        $scope.scanBarcode = function() {

            if(ionic.Platform.platforms[0] != "browser"){

                $cordovaBarcodeScanner.scan().then(function(imageData) {

                    self.showLoading();
                    //alert(imageData.text);

                    var myDrugsDataPromise = Drugs.getData();
                    myDrugsDataPromise.then(function(result) {

                        $scope.drugs = result;

                        var find = false;

                        angular.forEach($scope.drugs, function(value, key){
                            if(imageData.text == value.bar_code || (value.flash_code != '' && imageData.text.indexOf(value.flash_code) !== -1)) {
                                find = true;
                                $scope.drug = value;
                                $ionicHistory.nextViewOptions({
                                    disableBack: false
                                });
                                $state.go('app.drug', { 'drugId': value.id });
                                if(imageData.text != value.bar_code) {  // --> This is a flash code
                                    // Get experitation date from flash code
                                    var expDateTmp = imageData.text.substring(19,25);
                                    DrugsService.expDate = "Expiprated date : " + /*expDateTmp.substring(4,6) + "/" +*/ expDateTmp.substring(2,4) + "/" + expDateTmp.substring(0,2);
                                    //alert(Drugs.expDate);
                                }
                                else {
                                    DrugsService.expDate = '';
                                }
                            }
                        });

                        if(!find){
                            alert("Unknow drug !");
                        }
                    });
                    self.hideLoading();

                }, function(error) {
                    console.log("An error happened -> " + error);
                });

            } else {
                alert("Sorry, you cannot use this function on browser.");
            }
        };

    });