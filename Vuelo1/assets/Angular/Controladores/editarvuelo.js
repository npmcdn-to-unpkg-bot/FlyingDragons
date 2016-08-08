applicacion.controller('EditarVueloController',['$scope','$stateParams','AdminFactory', 'VueloAdminFactory', 'VueloFactory', 'toastr', function($scope, $stateParams, AdminFactory, VueloAdminFactory, VueloFactory, toastr){
    toastr.info('Info','Entraste a Editar Vuelo');
    console.log('Entraste a editarVuelo');
    
     $scope.listaCiudadesOrigen=[
        {
            ciudad:'Quito',
            codigo:"Quito"
        },
        {
            ciudad:'Paris',
            codigo:"Paris"
        }
    ];
    
    $scope.listaCiudadesDestino=[
        {
            ciudad:'Quito',
            codigo:"Quito"
        },
        {
            ciudad:'Paris',
            codigo:"Paris"
        }
    ];
    
    $scope.listaEstado=[
        {
            estado:'Disponible',
            codigo:"Disponible"
        },
        {
            estado:'NoDisponible',
            codigo:"NoDisponible"
        }
    ]
    console.log($scope.listaEstado)
    
    
    
    $scope.ultimoValor=null;
    
    $scope.cambiarDestino = function() 
    {
        if($scope.ultimoValor!=null){
            $scope.listaCiudadesDestino.push($scope.ultimoValor)
        }
        var encontro=false;
        for(var i=0; i<$scope.listaCiudadesDestino.length; i++)
        {
            if($scope.listaCiudadesDestino[i].ciudad==$scope.nuevoVuelo.origenVuelo){
                $scope.listaCiudadesDestino.splice(i,1);
                $scope.ultimoValor={
                    ciudad:$scope.nuevoVuelo.origenVuelo,
                    codigo:$scope.nuevoVuelo.origenVuelo
                }
                encontro=true;
            }
        }
    };
    
    $scope.generarCodigo = function()
    {
        var codigoCiudadOrigen;
        var codigoCiudadDestino;
        var codigoFechaSalida;
        //var codigoFechaLlegada;
        var codigoFinal;
        if($scope.nuevoVuelo.origenVuelo!=null)
        {
            codigoCiudadOrigen = $scope.nuevoVuelo.origenVuelo.substring(0,1);
            if (codigoCiudadOrigen == "Q")
            {
                codigoCiudadDestino = "P";  
            }
            else
            {
                codigoCiudadDestino = "Q";
            }
        }
        if($scope.nuevoVuelo.fechaSalidaVuelo!=null)
        {
            var strFecSal = $scope.nuevoVuelo.fechaSalidaVuelo.toString();
            var codMesSalida;
            var codDiaSalida;
            var codAnioSalida;
            codMesSalida = strFecSal.substring(4,7);
            codDiaSalida = strFecSal.substring(8,10);
            codAnioSalida = strFecSal.substring(11,15);
            codigoFechaSalida = codDiaSalida.concat(codMesSalida.concat(codAnioSalida));
        }
        /*if($scope.nuevoVuelo.fechaLlegadaVuelo!=null)
        {
            var strFecLle = $scope.nuevoVuelo.fechaLlegadaVuelo.toString();
            codigoFechaLlegada = strFecLle.substring(4,15);
            console.log(codigoFechaLlegada);
        }*/
        
        codigoFinal = codigoCiudadOrigen.concat(codigoCiudadDestino.concat(codigoFechaSalida));
        $scope.nuevoVuelo.codigoVuelo = codigoFinal;
        
    };
    
    $scope.fijarEscala = function()
    {
        var escalas;
        if($scope.nuevoVuelo.origenVuelo!=null)
        {
            escalas = $scope.nuevoVuelo.origenVuelo.substring(0,1);
            if (escalas == "Q")
            {
                $scope.nuevoVuelo.escalasVuelo = "Quito- -Paris"; 
                console.log("PUTAescalas"+escalas);
            }
            else
            {
                $scope.nuevoVuelo.escalasVuelo = "Paris- -Quito";
                console.log("PUTAescalas"+escalas);
            }
        }
    }
    
    $scope.minDate = new Date();
    
    $scope.fechaMinLlegada = function(){
        var fecMinLle = $scope.nuevoVuelo.fechaSalidaVuelo.toString();
        var diaSalidaStr;
        var diaSalidaInt;
        var anioSalida;
        var mesSalida;
        diaSalidaStr = fecMinLle.substring(8,10);
        diaSalidaInt = parseInt(diaSalidaStr);
        diaSalidaInt = diaSalidaInt + 2;
        diaSalidaStr = diaSalidaInt.toString();
        anioSalida = fecMinLle.substring(11,15);
        mesSalida = $scope.minDate.getMonth();
        
        $scope.minLlegadaDate = new Date(anioSalida,mesSalida,diaSalidaStr);
        console.log("puta fecha limite llegada:"+$scope.minLlegadaDate);
    }
    
    
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
        
        
        $scope.editarVuelo = function (vuelo){
        console.log("PUTA VUELO"+vuelo);
        //console.log("PUTA INDICE"+indice);
        //$scope.codigo = vuelo[indice].codigoVuelo;
        console.log("codigo de esta puta mierda: "+vuelo.fechaSalidaVuelo);
        VueloFactory.actualizar({
            idVuelo: vuelo.id
        },
        {
            codigoVuelo: vuelo.codigoVuelo,
            fechaSalidaVuelo: vuelo.fechaSalidaVuelo,
            fechaLlegadaVuelo: vuelo.fechaLlegadaVuelo,
            origenVuelo: vuelo.origenVuelo,
            destinoVuelo: vuelo.destinoVuelo,
            escalasVuelo: vuelo.escalasVuelo,
            estadoVuelo: vuelo.estadoVuelo,
            idAdmin: vuelo.idAdmin
        
        }).$promise.then(
        function correctoLlamoVuelos(respuesta){
            
             console.log(respuesta);
            //$scope.entrenadores[indice].fechaNacimiento=fecha;
             toastr.success('Correctamente!', 'Vuelo Editado');
            
        },
        function errorNoLlamoVuelos(error){
            console.log(error);
        });
        
        } 

    
}]);