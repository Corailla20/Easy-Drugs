/*
 File : drugsService.js
 Here defined useful variable for the DrugFactory
 This is a complement of DrugFactory to store local data in cache
 */

angular.module('services', [])

    .service('DrugsService', function() {

        this.expDate = '';

        this.drugs = [];
        
    });