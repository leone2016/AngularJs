(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
    $scope.geo = {};

    $http.jsonp('http://geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
    .success(function(data){
        //codigo cuando es correcta la petición
        $scope.geo = data;   
    })


  



}]);





})();
