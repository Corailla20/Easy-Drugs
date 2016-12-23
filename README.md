# Easy-Drugs

Easy-Drugs is a simple cordova application using Ionic.

## Install

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

#### Launch app on browser

    cordova platform add browser

    cordova run browser

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



## Team members
    - Coralie RODRIGUES
    - Jéremy MEZHOUD
    - Pierre CHARLES