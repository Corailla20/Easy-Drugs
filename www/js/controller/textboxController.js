/*
 File : textboxController.js
 The TextboxController interact with the textbox view
 */

'Use Strict';

angular.module('App')

    .controller('TextboxController', function($scope, $cordovaCamera, $ionicLoading) {

        var self = this;

        this.showLoading = function(message) {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner><p>'+message+'</p>'
            });
        };

        this.hideLoading = function(){
            $ionicLoading.hide();
        };

        $scope.takePhoto = function () {

            if(ionic.Platform.platforms[0] != "browser"){
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
                $cordovaCamera.getPicture(options).then(function (imageData) {

                    var imgURI = "data:image/jpeg;base64," + imageData;

                    self.showLoading('');
                    Tesseract.recognize('http://tesseract.projectnaptha.com/img/eng_bw.png')
                        .progress(function (progress) {
                            self.showLoading(progress.status);
                        })
                        .then(function (result) {
                            self.hideLoading();
                            console.log(result.text);
                        });
                }, function (err) {
                    alert("An error occured. Show a message to the user"+err);
                });

            } else { // Navigator treatment

                // TESSERACT
                self.showLoading('');
                Tesseract.recognize('http://www.cekane.fr/wp-content/uploads/2015/10/googlelogosept12015.png')
                    .progress(function (progress) {
                        self.showLoading(progress.status);
                    })
                    .then(function (result) {
                        self.hideLoading();
                        alert(result.text);
                        console.log(result.text);
                    });
            }

        };

        //Fonction that let the user pick a picture and then give it to the TesseractPlugin
        $scope.choosePhoto = function () {
            if(ionic.Platform.platforms[0] != "browser") {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;

                }, function (err) {
                    alert("An error occured. Show a message to the user" + err);
                });
            } else {
                alert("Sorry, this function is not available on browser.");
            }
        };

    });
