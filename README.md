# Easy-Drugs

Easy-Drugs is a simple cordova application using Ionic.

## Install

#### Install NodeJs & npm

    curl -sL https://deb.nodesource.com/setup_7.x | sudo bash -

    sudo apt-get install nodejs

#### Install Ionic

    npm install -g cordova ionic

#### Download project

    git clone https://github.com/PierreCharles/Easy-Drugs.git

## Run this app

Go into Easy-Drugs project :

    cd Easy-Drugs

#### Launch app on web browser

    ionic serve

#### Launch app on web browser in dev mode

    ionic serve --lab

#### Launch app on Android device

    cordova platform add android

    ionic run android --device

#### Launch app on IOS device

    cordova platform add ios



## Ionic project

- **www**
    - **js** contains all js source file.
        - **controller** : Controller folder
        - **modules** : Module folder
        - **services** : Service folder
        - **routes** : Contains routes of the application
        - app.js : entry point angular application
    - **templates** : Contains all html templates.
    - **css** : Contains all css stylesheet.
    - **lib** : Contains the libraries sources folders.
    - **img** : Contains all images of the application.
    - index.html : entry point of the application.
- **platforms** contains all enerated build file for devices (Android, ios, browser, ...)


## Plugins

- cordova-sqlite-storage : Native interface to sqlite in a Cordova/PhoneGap plugin for Android, iOS, Windows Universal (8.1), Amazon Fire-OS, and WP(7/8) with API similar to HTML5/Web SQL API.

- phonegap-plugin-barcodescanner : The BarcodeScanner plugin supports extracting data from a large range of barcodes, including QR codes. On Android you can also encode any piece of text (URL, phone number, etc) into a QR code.

## Team members
    - Coralie RODRIGUES
    - Jéremy MEZHOUD
    - Pierre CHARLES