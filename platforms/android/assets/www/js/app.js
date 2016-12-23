/*
   File : app.js
   This is the start point of the application.
   Here defined configs of application
 */
angular.module('App', ['ionic', 'app.routes', 'ngCordova'])

    // NOT USED NOW -> FOR DATABASE CONNECTION
    // .constant('FURL', 'https://ionicappblahblahcar.firebaseio.com/')

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
