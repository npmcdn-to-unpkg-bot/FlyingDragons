applicacion.controller('VueloAdminController',['$scope','$stateParams','AdminFactory', 'VueloAdminFactory', 'VueloFactory', 'toastr', function($scope, $stateParams, AdminFactory, VueloAdminFactory, VueloFactory, toastr){
    toastr.info('Info','Entraste a VueloAdmin');
    console.log('Entraste a VueloAdmin');
    
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
     
     
   
    console.log('Parametro Id Admin');
    console.log($stateParams.idAdmin);
    
    $scope.parametroIdAdmin = $stateParams.idAdmin;
    
    console.log($stateParams.idAdmin);
    
    $scope.existeAdmin = false;
    
    AdminFactory.get({
        id:$stateParams.idAdmin
    }).$promise.then(
        function success(respuesta)
        {
            $scope.existeAdmin = true;
            $scope.admin = respuesta; 
            console.log($scope.admin);
        },
        function error(error)
        {
            $scope.existeAdmin = false;
            $scope.error = "No existe ese admin";
        });
    
     
    
    
    VueloAdminFactory.busquedaPorIdAdmin(
        {
            idAdmin: $stateParams.idAdmin
        }).$promise.then(
            function success(respuesta)
            {
                $scope.vuelo = respuesta;

                console.log(respuesta);
            },
            function error(error)
            {   
                console.log(error);
            });
    
   
    
    
    
    $scope.nuevoVuelo = {
        codigoVuelo:'',
        fechaSalidaVuelo:'',
        fechaLlegadaVuelo:'',
        origenVuelo:'',
        destinoVuelo:'',
        escalasVuelo:'',
        estadoVuelo:'',
        idAdmin: $stateParams.idAdmin
        
        
        
    }
    
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
        console.log("origen vuelo"+$scope.nuevoVuelo.origenVuelo)
    }
    
     
    $scope.agregarNuevoVuelo = function(){
        
        VueloAdminFactory.save({
            codigoVuelo: $scope.nuevoVuelo.codigoVuelo,
            fechaSalidaVuelo: $scope.nuevoVuelo.fechaSalidaVuelo,
            fechaLlegadaVuelo: $scope.nuevoVuelo.fechaLlegadaVuelo,
            origenVuelo: $scope.nuevoVuelo.origenVuelo,
            destinoVuelo: $scope.nuevoVuelo.destinoVuelo,
            escalasVuelo: $scope.nuevoVuelo.escalasVuelo,
            estadoVuelo: $scope.nuevoVuelo.estadoVuelo,
            idAdmin: $scope.nuevoVuelo.idAdmin,
            
            
        })
        .$promise.then(
        function correctoLlamoVuelo(respuesta){
            console.log(respuesta);
            //$scope.usuarios.push(respuesta);
            $scope.nuevoVuelo = {
                
             
                                        codigoVuelo:'',
                                        fechaSalidaVuelo:'',
                                        fechaLlegadaVuelo:'',
                                        origenVuelo:'',
                                        destinoVuelo:'',
                                        escalasVuelo:'',
                                        estadoVuelo:'',
                                        idAdmin: $stateParams.idAdmin
                                    };
            toastr.success('Correctamente!', 'Vuelo Ingresado');
        },
        function errorNoLlamoVuelo(error){
            console.log(error);
        });
    }
    
    $scope.editarVuelo = function (vuelo, indice){
        console.log("PUTA VUELO"+vuelo);
        console.log("PUTA INDICE"+indice);
        //$scope.codigo = vuelo[indice].codigoVuelo;
        console.log("codigo de esta puta mierda: "+vuelo.fechaSalidaVuelo);
        VueloAdminFactory.actualizar({
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
    
    
    /*VueloFactory.query().$promise.then(
        function correctoLlamaVuelos(respuesta){
         console.log(respuesta);
            $scope.vuelos = respuesta;
            console.log($scope.vuelos);
        },
        function errorNoLlamoVuelos(error){
            console.log(error);
        });*/
    
}]);