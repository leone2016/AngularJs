#### Hi, I begin to study this framework in July 2020, beacause there's a company that work with this legacy version

### Ejercicio 1 

* hola mundo
* filtros:  Uppercase | LowerCase | currency | number
* ngModel
* Evaluación 

### Ejercicio 2

* controller
* ng-click
* $scope 
* angular.copy
* ngShow: 

### Ejercicio 3

* ng-repeat (key, value) in dataSet | item in items track by $index 

### Ejercicio 4

* ng-repeat | filtros:{}
* orderBy:'variable'<- ordena de forma ascendente 
* orderBy:'-variable'<- ordena de forma descendente 
* orderBy:'variable':reverse <- es de tipo bool, sirve para ascendente y descendente

### Ejercicio 5

* ng-options: similar al ng-repeat pero para select

### Ejercicio 6

* $http - request
* ng_include

## Actualización del Módulo HTTP version de AngularJS 1.6 o superior

Si usamos la versión menor a 1.6 

``` Js
$http.get('data.json')
    .success(function(data) {

    })
    .error(function(data, status) {

    })
    .finally(function() {

    });
```

Si usamos la versión mayor a 1.6 

``` Js
$http.get('data.json')
    .then(function(respuesta) {
        // Todo BIEN, la información viene en la respuesta.
    })
    .catch(function(respuesta) {
        // Problemas con la peticion
    })
    .finally(function() {
        // Al terminar el THEN o CATCH
    });
```
### Ejercicio 7
* api ip's
### Ejercicio 8   / CRASHED, no pude terminar, base no funciona, ni bacend
* router
* create small Components
* otherwise:  si la url no concuerda con ninguna
* ng-view: muestra el contenido de las páginas
* ng-class
* filteros personalizados telefono | home.html
* ng-repeat limitTo:5

# Sección 7
* clase 34
    * paso de valores por url
    * $routeParams
    * window.location: redirecciona a un pagina
    * primer form
* clase 35  
    * ui mask
* clase 35 
    * ng-submit
    * $http.post
    * setTimeout -> $scope.$apply(): apply aplica cambios ascincronos a Angular
* clase 41
    * ngTouch
* clase 46 
    *  $q ejecuta procesos ascincronos, es necesario retornarlo
    * .promise.then( resolve(), reject()  )      
# Documentation

[AngularJs](https://docs.angularjs.org/api/ng)
[Api ip](http://geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK)
[Ui mask](https://htmlpreview.github.io/?https://github.com/angular-ui/ui-mask/master/demo/index.html)
[angular auto validate](https://jonsamwell.github.io/angular-auto-validate/)
