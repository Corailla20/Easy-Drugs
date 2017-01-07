/*
 File : textboxController.js
 The TextboxController interact with the textbox view
 */

'Use Strict';

angular.module('App')

    .controller('TextboxController', function($scope, $cordovaCamera) {

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

                    Tesseract.recognize(imgURI)
                        .progress(function (p) {
                        })
                        .then(function (result) {
                            alert(JSON.stringify(result));
                            alert(result.text);
                            alert(JSON.stringify(result.text));
                        })

                }, function (err) {
                    alert("An error occured. Show a message to the user"+err);
                });
            } else {
                alert("Sorry, this function is not available on browser.");
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
