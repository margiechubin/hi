angular.module('myApp', [])
  .controller('MyController', function($scope, $http) {

    $scope.data = {};

    $http.get('data.json').then(function(d) {
      $scope.data = d.data;
      console.log($scope.data);
    });
  });