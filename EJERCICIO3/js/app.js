


(function(){
//----inicia

var app = angular.module('universidadApp', [] );


app.controller('listadoCtrl', function($scope){
	$scope.listado = ["Leonardo Medina", 'Lorena Guartazaca', "Prueba  Nombre"];
	$scope.listadoProfesores = {
		profesores: [{
			nombre: "Leonardo Medina",
			edad: 28,
			clase: "angularJs"
		},
		{
			nombre: "Melissa Flores",
			edad: 24,
			clase: "Ad-123"
		},
		{
			nombre: "Carlos Montalvo",
			edad: 35,
			clase: "AF-234"
		}
	]
	}
}); 

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}
//----fin  
})();

