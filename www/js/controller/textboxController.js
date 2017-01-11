/*
     File : textboxController.js
     The TextboxController interact with the textbox view
 */

'Use Strict';

angular.module('App')

    .controller('TextboxController', function($scope, $cordovaCamera, $ionicLoading) {

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
         * Define camera options
         * @type {{quality: number, destinationType: (module:Camera.DestinationType|number),
         * allowEdit: boolean, encodingType: (module:Camera.EncodingType|number),
         * targetWidth: number, targetHeight: number, popoverOptions: CameraPopoverOptions,
         * saveToPhotoAlbum: boolean}}
         */
        var options =
        {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        /**
         * Funtion getting an image, then calling Tesseract to extract text from it
         * @param URI
         */
        function callTesseract(URI)
        {
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


        /**
         * Function call when click on take photo button
         */
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

            } else {

            }

        };

        /**
         * Function that let the user pick a picture and then give it to the Tesseract
         */
        $scope.choosePhoto = function () {
            if(ionic.Platform.platforms[0] != "browser") {

                options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;

                $cordovaCamera.getPicture(options).then(function (imageData) {

                    var imgURI = "data:image/jpeg;base64," + imageData;
                    callTesseract(imgURI);

                }, function (err) {

                    if(err = "Selection cancelled.")
                    {

                    } else alert("An error occured. Show a message to the user" + err);

                });
            } else {
                alert("Sorry, this function is not available on browser.");
            }
        };

    });
