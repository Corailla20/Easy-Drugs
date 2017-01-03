/*
 File : databaseService.js
 Here defined all database remote functions
 */

'Use Strict';

angular.module('App')


    .controller('DatabaseController', function($scope, $cordovaSQLite) {

        // CODE TO REMOTE DATABASE
        /*

            //var db = $cordovaSQLite.openDB({ name: "my.db" });

            // for opening a background db:
            var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });

            $scope.execute = function() {
                var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
                $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
                    console.log("insertId: " + res.insertId);
                }, function (err) {
                    console.error(err);
                });
            };

            */

    });