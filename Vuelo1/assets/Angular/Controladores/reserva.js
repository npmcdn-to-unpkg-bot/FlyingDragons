applicacion.controller('ReservaController',['$scope','$stateParams','AdminFactory', 'VueloAdminFactory', 'VueloFactory', 'ReservaFactory', 'PersonaFactory', 'toastr', function($scope, $stateParams, AdminFactory, VueloAdminFactory, VueloFactory, ReservaFactory, PersonaFactory, toastr){
    toastr.info('Info','Ingrese datos de la reserva');
    
    
    console.log('Parametro Id Vuelo');
    console.log($stateParams.idVuelo);
    
    $scope.parametroIdVuelo = $stateParams.idVuelo;
    
    console.log($stateParams.idVuelo);
    
    $scope.existeVuelo = false;
    
  VueloFactory.get({
        id:$stateParams.idVuelo
    }).$promise.then(
        function success(respuesta)
        {
            $scope.existeVuelo = true;
            $scope.vuelo = respuesta; 
            console.log($scope.vuelo);
        },
        function error(error)
        {
            $scope.existeVuelo = false;
            $scope.error = "No existe ese vuelo";
        });
    
    
    
    
}]);