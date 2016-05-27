var appServices = angular.module('appServices', []);

appServices.factory('dataService', function ($http) {
    var data = {};

    $http.get('data.json').then(function(d) {
        data = d.data;
    });

    return {
        get: function () {
            return data;
        }
    }
});
