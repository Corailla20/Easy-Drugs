/*
   File : app.js
   This is the start point of the application.
   Here defined configs of application
 */

angular.module('App', ['ionic', 'app.routes', 'ngCordova', 'factories'])

    // Define a constant URL for web service
    .constant('SERVICE_URL', 'https://easy-drugs.000webhostapp.com/web_service')

    .run(function($ionicPlatform) {

          $ionicPlatform.ready(function() {

              if (window.cordova && window.cordova.plugins.Keyboard) {
                  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                  cordova.plugins.Keyboard.disableScroll(true);

              }
              if (window.StatusBar) {
                  StatusBar.styleDefault();
              }
          });
    })
