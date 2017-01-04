/*
 File : textboxController.js
 The TextboxController interact with the textbox view
 */

'Use Strict';

angular.module('App')

    .controller('TextboxController', function($scope, $cordovaCamera) {

        //Camera options
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
        
        $scope.takePhoto = function () {

            options.sourceType = Camera.PictureSourceType.CAMERA;

            //Fonction that let the user take a picture and then give it to the TesseractPlugin 
            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.image = "data:image/jpeg;base64," + imageData;
                $scope.text = null;

                $timeout(function() {

                    TesseractPlugin.loadLanguage(language, function(response) {
                        deferred.resolve(response);
                    }, function(reason) {
                        deferred.reject('Error on loading OCR file for your language. ' + reason);
                    });

                    TesseractPlugin.recognizeText(imageData, language, function(recognizedText) {
                        $scope.text = recognizedText;
                    }, function(reason) {
                        console.log('Error on recognizing text from image. ' + reason);
                    });

                });


            }, function (err) {
                console.log('ERROR with camera plugin. Error: ' + err);
            });
        };

        $scope.choosePhoto = function () {

            options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

            //Fonction that let the user pick a picture and then give it to the TesseractPlugin
            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.image = "data:image/jpeg;base64," + imageData;
                $scope.text = null;

                $timeout(function() {

                    TesseractPlugin.loadLanguage(language, function(response) {
                        deferred.resolve(response);
                    }, function(reason) {
                        deferred.reject('Error on loading OCR file for your language. ' + reason);
                    });

                    TesseractPlugin.recognizeText(imageData, language, function(recognizedText) {
                        $scope.text = recognizedText;
                    }, function(reason) {
                        console.log('Error on recognizing text from image. ' + reason);
                    });

                });

            }, function (err) {
                console.log('ERROR with camera plugin. Error: ' + err);
            });
        };

    });
