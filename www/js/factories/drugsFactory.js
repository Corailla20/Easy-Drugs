angular.module('factories', [])

    .factory('Drugs', function(SERVICE_URL, $http) {

        var getDrugId = function(code) {

            // Angular $http() and then() both return promises themselves
            return $http({method:"GET", url:SERVICE_URL+'?action=getDrugId&code=' + code}).then(function(result){

                // What we return here is the data that will be accessible to us after the promise resolves
                return result.data;
            });
        };

        var getDrugWithId = function(drugId) {

            // Angular $http() and then() both return promises themselves
            return $http({method:"GET", url:SERVICE_URL+'?action=getDrugWithId&id=' + drugId}).then(function(result){

                // What we return here is the data that will be accessible to us after the promise resolves
                return result.data;
            });
        };

        var getData = function() {

            // Angular $http() and then() both return promises themselves
            return $http({method:"GET", url:SERVICE_URL+'?action=getDrugs'}).then(function(result){

                // What we return here is the data that will be accessible to us after the promise resolves
                return result.data;
            });
        };

        return {getDrugId: getDrugId, getDrugWithId : getDrugWithId, getData : getData};

    });
