var app = angular.module('promesaApp.controladores', []);

app.controller('personasCtrl', ['$scope', 'PersonasServicio', function($scope, PersonasServicio){
	
    $scope.personas = PersonasServicio;
}]);
