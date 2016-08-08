applicacion.controller('VueloController',['$scope','$http','VueloFactory','toastr', function($scope, $http, VueloFactory, toastr){
    toastr.info('Info','Entraste a Vuelo');
    console.log('Entraste a Vuelo');
    
    
    VueloFactory.query().$promise.then(
        function correctoLlamaVuelos(respuesta){
         console.log(respuesta);
            $scope.vuelo = respuesta;
            console.log($scope.vuelo);
        },
        function errorNoLlamoVuelos(error){
            console.log(error);
        });

    
}]);