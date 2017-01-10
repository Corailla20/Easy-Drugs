/*
 File : barcodeController.js
 The BarcodeController interact with the barcode view
 */

'Use Strict';

angular.module('App')

    .controller('BarcodeController', function($scope, $cordovaBarcodeScanner, $state, $ionicHistory, DrugsService, Drug, $ionicLoading, $ionicModal, $ionicPopup) {

        var self = this;

        $ionicModal.fromTemplateUrl('templates/login.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        });

        this.showLoading = function() {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner>'
            });
        };

        this.hideLoading = function(){
            $ionicLoading.hide();
        };

        $scope.showPopup = function() {
            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="textarea" placeholder="Nom du médicament" ng-model="drug2.name">',
                title: 'Add drug',
                subTitle: 'Do you want to add this drug in the database ?',
                scope: $scope,
                buttons: [
                    { text: 'No' },
                    {
                        text: '<b>Yes</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            //$scope.modal.show();
                            if($scope.drugCode.indexOf('01') !== -1) { 
                                var drugToAdd = {/*title:$scope.drug2.name, */flash_code:$scope.drugCode};
                            }
                            else {
                                var drugToAdd = {/*title:$scope.drug2.name, */bar_code:$scope.drugCode};
                            }
                            // Add drug in DB
                            alert(JSON.stringify(drugToAdd));
                        }
                    }
                ]
            });

            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

            $timeout(function() {
                myPopup.close(); // Close the popup after 3 seconds for some reason
            }, 3000);
        };

        $scope.scanBarcode = function() {

            $scope.drugCode = '';

            if(ionic.Platform.platforms[0] != "browser"){

                $cordovaBarcodeScanner.scan().then(function(imageData) {

                    if(imageData.text.indexOf('01') !== -1) {                     
                        // Decompose flash code for getting CIP
                        $scope.drugCode = imageData.text.substring(1,19);
                    }
                    else {
                        $scope.drugCode = imageData.text;
                    }
                    //self.showLoading();

                    alert($scope.drugCode);

                    var myDrugDataPromise = Drug.getData($scope.drugCode);
                    myDrugDataPromise.then(function(result) {

                        $scope.drug = result[0];
                        alert(JSON.stringify(result[0]));
                        alert(JSON.stringify(result));
                        alert($scope.drug.id);
                        //var find = false;
                        if(result.length > 0) {
                            $state.go('app.drug', { 'drugId': $scope.drug.id });
                            if(imageData.text != $scope.drug.bar_code) {  // --> This is a flash code           
                                // Get expiration date from flash code
                                var expDateTmp = imageData.text.substring(19,25);
                                DrugsService.expDate = "Expiration date : " + expDateTmp.substring(2,4) + "/" + expDateTmp.substring(0,2);
                                //alert(Drugs.expDate);
                            }
                            else {
                                DrugsService.expDate = '';
                            }
                            $ionicHistory.nextViewOptions({
                                disableBack: false
                            });
                        }

                        /*angular.forEach($scope.drugs, function(value, key){
                            if(imageData.text == value.bar_code || (value.flash_code != '' && imageData.text.indexOf(value.flash_code) !== -1)) {
                                find = true;                                

                                $scope.drug = value;

                                $state.go('app.drug', { 'drugId': value.id });
                                if(imageData.text != value.bar_code) {  // --> This is a flash code           
                                    // Get expiration date from flash code
                                    var expDateTmp = imageData.text.substring(19,25);
                                    DrugsService.expDate = "Expiration date : " +  expDateTmp.substring(2,4) + "/" + expDateTmp.substring(0,2);
                                    //alert(Drugs.expDate);
                                }
                                else {
                                    DrugsService.expDate = '';
                                    $scope.drugCode = imageData.text;
                                }
                                $ionicHistory.nextViewOptions({
                                    disableBack: false
                                });
                            }
                        });*/

                        else {  
                            alert("Unknow drug !");

                            /*if(imageData.text.indexOf('01') !== -1) {                     
                                // Decompose flash code for getting CIP
                                $scope.drugCode = imageData.text.substring(1,19);
                            }
                            else {
                                $scope.drugCode = imageData.text;
                            }*/
                            alert($scope.drugCode);                         
                            $scope.showPopup();

                        }
                    });
                    //self.hideLoading();

                }, function(error) {
                    console.log("An error happened -> " + error);
                });

            } else {
                alert("Sorry, you cannot use this function on browser.");
            }
        };

    });