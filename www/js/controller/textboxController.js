/*
 File : textboxController.js
 The TextboxController interact with the textbox view
 */

'Use Strict';

angular.module('App')

    .controller('TextboxController', function($scope, $cordovaCamera) {


        TesseractPlugin.loadLanguage(language, function(response) {
            deferred.resolve(response);
        }, function(reason) {
            deferred.reject('Error on loading OCR file for your language. ' + reason);
        });

        $scope.takePhoto = function () {
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
                $scope.imgURI = "data:image/jpeg;base64," + imageData;

                TesseractPlugin.recognizeText(imageData, language, function(recognizedText) {
                    $scope.text = recognizedText;
                }, function(reason) {
                    alert('Error on recognizing text from image. ' + reason);
                });

            }, function (err) {
                alert("An error occured. Show a message to the user"+err);
            });
        };

        //Fonction that let the user pick a picture and then give it to the TesseractPlugin
        $scope.choosePhoto = function () {
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
                
                TesseractPlugin.recognizeText(imageData, language, function(recognizedText) {
                    $scope.text = recognizedText;
                }, function(reason) {
                    alert('Error on recognizing text from image. ' + reason);
                });

            }, function (err) {
                alert("An error occured. Show a message to the user"+err);
            });
        };

    });
