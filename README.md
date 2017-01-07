# Easy-Drugs

Easy-Drugs is a simple Cordova application using Ionic.

#### Download project

    git clone https://github.com/PierreCharles/Easy-Drugs.git

## Install App

#### Minimal installation

    You need to a web service to run. You should copy unless www/web_service into public_html folder server.
    Import database present into Config folder (database.sql) into your database.
    CHANGE SERVICE_URL CONSTANT INTO app.js FILE with the correct URL of your server !
    CHANGE CONFIGURATION into config file into web_service folder !

#### Full installation (Website app)

    Copy all the content of www folder into public_html server folder.
    Import database present into Config folder (database.sql) into your database.

## Development configuration

#### NodeJs & npm

    curl -sL https://deb.nodesource.com/setup_7.x | sudo bash -

    sudo apt-get install nodejs

#### Ionic

    npm install -g cordova ionic

## Run development App

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

#### Project structure
- **www**
    - **web_service** : contains all php files to copy an web server to make a web service.
    - **js** contains all js source file.
        - **controller** : Controller folder.
        - **factories** : Factories files folder.
        - **services** : Services file folder.
        - **routes** : Contains routes of the application.
        - app.js : entry point angular application.
    - **templates** : Contains all html templates.
    - **css** : Contains all css stylesheet.
    - **lib** : Contains the libraries sources folders.
    - **img** : Contains all images of the application.
    - index.html : entry point of the application.
- **plugins** contains all app plugins.

#### Plugins

- **phonegap-plugin-barcodescanner** : The BarcodeScanner plugin supports extracting data from a large range of barcodes, including QR codes. On Android you can also encode any piece of text (URL, phone number, etc) into a QR code.

## Team members
    - Coralie **RODRIGUES**
    - Jéremy **MEZHOUD**
    - Pierre **CHARLES**