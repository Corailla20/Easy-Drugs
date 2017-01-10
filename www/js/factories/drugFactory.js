angular.module('factories', [])

    .factory('Drug', function(SERVICE_URL, $http) {

        var getData = function(code) {

            // Angular $http() and then() both return promises themselves
            return $http({method:"GET", url:SERVICE_URL+'?action=getDrug&code=' + code}).then(function(result){

                // What we return here is the data that will be accessible to us after the promise resolves
                return result.data;
            });
        };

        return {getData: getData};

    })
