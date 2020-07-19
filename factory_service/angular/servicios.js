var app = angular.module('promesaApp.servicios', []);
app.factory('PersonasServicio', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
    var self = {
        "cargando": false,
        "mensaje": "",
        "data": []
    };

    self.cargarData = function () {
        self.cargando = true;
        var q = $q.defer();

        $http.jsonp("http://www.json-generator.com/api/json/get/bULFlqLvtu?indent=2&callback=JSON_CALLBACK")
            .then(function success(usuarios) {
                /*     self.cargando = false;
                    self.data = usuarios.data; */
                q.resolve(usuarios.data);
            },
                function error(error) {
                    console.error(error);
                    q.reject(error);
                });
                return q.promise;
    };
    $rootScope.promise = self.cargarData();
    $rootScope.promise.then(
        function (data) {
            self.cargando = false;
            self.mensaje = "Informaciòn cargada correctamente";
            self.data = data;
        },
        function (error) {
            self.cargando = false;
            self.mensaje = "Error al cargar";
            console.error(error);
        }
    )
    return self;
}])