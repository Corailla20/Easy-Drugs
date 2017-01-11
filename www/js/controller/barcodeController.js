/*
 File : barcodeController.js
 The BarcodeController interact with the barcode view
 */

'Use Strict';

angular.module('App')

    .controller('BarcodeController', function($scope, $cordovaBarcodeScanner, $state, $ionicHistory, DrugsService, Drugs, $ionicLoading, $ionicModal, $ionicPopup) {

        var self = this;

        /**
         * Function to display a spinner for loading with a message
         * @param message
         */
        this.showLoading = function(message)
        {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner><p>'+message+'</p>'
            });
        };

        /**
         * Function to hide spinner loading
         */
        this.hideLoading = function()
        {
            $ionicLoading.hide();
        };

        /**
         * Function for the modal window add database
         */
        $ionicModal.fromTemplateUrl('templates/login.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        });

        $scope.drug2 = {'title':'','subname':''};

        /**
         * An elaborate, custom popup
         * @param code
         */
        var showPopup = function(code)
        {
            var myPopup = $ionicPopup.show({
                template: '<input type="textarea" placeholder="Drug\'s name" ng-model="drug2.title"><input type="textarea" placeholder="Drug\'s subname" ng-model="drug2.subname">',
                title: 'Add drug',
                subTitle: 'Do you want to add this drug in the database ?',
                scope: $scope,
                buttons: [
                    { text: 'No' },
                    {
                        text: '<b>Yes</b>',
                        type: 'button-positive',
                        onTap: function(event)
                        {
                            var drugToAdd =
                            {
                                title : $scope.drug2.title,
                                subname:$scope.drug2.subname,
                                bar_code:'',
                                flash_code:''
                            };

                            code.indexOf('01') !== -1 ? drugToAdd['flash_code']=code : drugToAdd['bar_code'] =code;

                            var myDrugDataPromise = Drugs.addDrug(drugToAdd);
                            myDrugDataPromise.then(function(result) {
                                $state.go('app.drug', { 'drugId': result});
                            });
                        }
                    }
                ]
            });

            myPopup.then(function(res)
            {
                $scope.drug2.title = '';
                $scope.drug2.subname = '';
            });
        };

        //showPopup('0145467512754');

        /**
         * Method to scan a barcode
         */
        $scope.scanBarcode = function()
        {
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
                    self.showLoading('');

                    var myDrugDataPromise = Drugs.getDrugId($scope.drugCode);
                    myDrugDataPromise.then(function(result)
                    {
                        var res = result;
                        if(res != -1)
                        {
                            if(imageData.text.indexOf('01') !== -1)
                            {
                                var expDateTmp = imageData.text.substring(19,25);
                                DrugsService.expDate = "Expiration date : " + expDateTmp.substring(2,4) + "/" + expDateTmp.substring(0,2);
                            }
                            else
                            {
                                DrugsService.expDate = '';
                            }
                            $state.go('app.drug', { 'drugId': res });
                            $ionicHistory.nextViewOptions({
                                disableBack: false
                            });
                        }

                        else
                        {
                            alert("Unknow drug !");                      
                            showPopup($scope.drugCode);
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