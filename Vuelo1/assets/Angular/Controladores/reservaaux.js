applicacion.controller('ReservaAuxController',['$scope','$stateParams','AdminFactory', 'VueloAdminFactory', 'VueloFactory', 'ReservaFactory', 'PersonaFactory', 'ReservaAuxFactory', 'toastr', function($scope, $stateParams, AdminFactory, VueloAdminFactory, VueloFactory, ReservaFactory, PersonaFactory, ReservaAuxFactory, toastr){
    toastr.info('Info','Ingrese datos de la reserva');

        
        
         /*ReservaAuxFactory.query().$promise.then(
        function correctoLlamaAdmin(respuesta){
         console.log(respuesta);
            $scope.reservaaux = respuesta;
            console.log($scope.reservaaux);
        },
        function errorNoLlamoUsuarios(error){
            console.log(error);
        });*/
        
        $scope.reservaVueloAux = 
        {
            tipoReserva:'',
            responsableReserva:'',
            fechaReserva:'',
            fechaSalidaVueloIda:'',
            fechaSalidaVueloVuelta:'',
            ciudadOrigenReserva:'',
            ciudadDestinoReserva:'',
            cantidadPersonas:'',
            cantidadAdultos:'',
            cantidadNinios:'',
            cantidadBebes:'',
            codigoVueloIda:'',
            codigoVueloVuelta:'',
            codigoAux:''
        }
        
        var adultos = 0;
        
        ReservaAuxFactory.get({
        id:$stateParams.idReservaAux
    }).$promise.then(
        function success(respuesta)
        {
            $scope.existeReservaAux = true;
            $scope.ReservaAux = respuesta;
            console.log($scope.ReservaAux);
        },
        function error(error)
        {
            $scope.existeVuelo = false;
            $scope.error = "No existe esa Reserva";
        });
        
        
        $scope.number = 2;
        console.log("PUTA Nrp Adultos"+$scope.number);
        $scope.getNumber = function(num) {
            return new Array(num);   
    }
    
    $scope.obtenerCantidadAdultos = function(){
        var cantidadAdultos;
        cantidadAdultos = $scope.reservaVueloAux.cantidadAdultos;
        console.log("PUTA CANTIDAD ADULTOS INICIA AQUI|"+cantidadAdultos+"|TERMINA AQUI");
    }
    
    
    
    
    
    
}]);