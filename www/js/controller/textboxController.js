/*
 File : textboxController.js
 The TextboxController interact with the textbox view
 */

'Use Strict';

angular.module('App')

    .controller('TextboxController', function($scope, $cordovaCamera, $ionicLoading) {

        var self = this;

        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        //Funtion getting an image, then calling tesseract to extract text from it
        function callTesseract(URI) { 
            self.showLoading('');
            Tesseract.recognize(URI)
                .progress(function (progress) {
                    self.showLoading(progress.status);
                })
                .then(function (result) {
                    self.hideLoading();
                    alert(result.text);
                });
        }


        this.showLoading = function(message) {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner><p>'+message+'</p>'
            });
        };

        this.hideLoading = function(){
            $ionicLoading.hide();
        };

        $scope.takePhoto = function () {

            options.sourceType = Camera.PictureSourceType.CAMERA;

            if(ionic.Platform.platforms[0] != "browser"){
                $cordovaCamera.getPicture(options).then(function (imageData) {

                    var imgURI = "data:image/jpeg;base64," + imageData;

                    callTesseract(imgURI);

                }, function (err) {

                    if(err = "Camera cancelled."){

                    }else alert("An error occured. Show a message to the user" + err);

                });

            } else { // Navigator treatment

                // TESSERACT
                self.showLoading('');
                Tesseract.recognize('http://ngcordova.com/img/ngcordova-logo.png')
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

                options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

                $cordovaCamera.getPicture(options).then(function (imageData) {

                    var imgURI = "data:image/jpeg;base64," + imageData;

                    callTesseract(imgURI);

                }, function (err) {

                    if(err = "Selection cancelled."){

                    }else alert("An error occured. Show a message to the user" + err);

                });
            } else {
                alert("Sorry, this function is not available on browser.");
            }
        };

    });
