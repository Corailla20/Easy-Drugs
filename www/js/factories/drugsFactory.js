/*
 File : drugsFactory.js
 Here defined all function to send drugs request at the web service
 */

angular.module('factories', [])

    .factory('Drugs', function(SERVICE_URL, $http) {


        /**
         * Angular $http() and then() both return promises themselves
         * What we return here is the data that will be accessible to us after the promise resolves
         */
        var getDrugId = function(code)
        {
            return $http({method:"GET", url:SERVICE_URL+'?action=getDrugId&code=' + code}).then(function(result)
            {
                return result.data;
            });
        };

        /**
         * Angular $http() and then() both return promises themselves
         * What we return here is the data that will be accessible to us after the promise resolves
         */
        var getDrugWithId = function(drugId)
        {
            return $http({method:"GET", url:SERVICE_URL+'?action=getDrugWithId&id=' + drugId}).then(function(result)
            {
                return result.data;
            });
        };

        /**
         * Angular $http() and then() both return promises themselves
         * What we return here is the data that will be accessible to us after the promise resolves
         */
        var getData = function()
        {
            return $http({method:"GET", url:SERVICE_URL+'?action=getDrugs'}).then(function(result)
            {
                return result.data;
            });
        };

        /**
         * Angular $http() and then() both return promises themselves
         * What we return here is the data that will be accessible to us after the promise resolves
         */
        var addDrug = function(drug)
        {
            var urlRequest =
                SERVICE_URL+'?action=addDrug'
                +'&title='+drug['title']
                +'&subname='+drug['subname']
                +'&flash_code='+drug['flash_code']
                +'&bar_code='+drug['bar_code'];

            return $http({method:"GET", url:urlRequest}).then(function(result)
            {
                return result.data;
            });
        };

        return {
            getDrugId: getDrugId,
            getDrugWithId : getDrugWithId,
            getData : getData,
            addDrug : addDrug
        };

    });
