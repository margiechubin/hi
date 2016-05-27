app.controller('mainController', ['$scope', '$http', function($scope, $http) {

  $scope.data = {};

  $http.get('data.json').then(function(d) {
    $scope.data = d.data;
    console.log($scope.data);
  });

}]);

/*app.controller('aboutController', ['$scope', '$http', 'dataService', function($scope, $http, dataService) {

  $scope.data = {};
  dataService.get().success(function(d){
    console.log(data);
    $scope.data = d.data;
  });

}]);*/
