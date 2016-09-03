app.controller('mainController', ['$scope', '$http', function($scope, $http) {

  $scope.data = {};

  $http.get('data.json').then(function(d) {
    $scope.data = d.data;
    console.log($scope.data);
  });

  $scope.links = [{route:"#/about",name:"About"},
                  {route:"#/resume",name:"Resume"},
                  {route:"#/projects",name:"Projects"},
                  {route:"#/contact",name:"Contact"}
                  ];
  $scope.setActive = function(link){
    console.log(link.name);
    $('#'+link.name).addClass('active');
    for (var i = 0; i < $scope.links.length; i++){
      if ($scope.links[i].name !== link.name) {
        $('#'+$scope.links[i].name).removeClass('active');
      }
    }
  };

}]);