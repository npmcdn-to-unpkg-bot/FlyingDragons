applicacion.controller('BuscarController',['$scope','$stateParams','AdminFactory', 'ReservaAuxFactory','VueloAdminFactory', 'VueloFactory', 'toastr', function($scope, $stateParams, AdminFactory, ReservaAuxFactory,VueloAdminFactory, VueloFactory, toastr){
    toastr.info('Info','Busque su webada');
    var fechaIni;
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
    
    $scope.listaTipoReserva=[
        {
            tipoReserva:'VIP',
            codigo:"vip"
        },
        {
            tipoReserva:'Economica',
            codigo:"eco"
        }
    ];
    
    $scope.reservaVuelo = {
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
    
    var cantReservas =[];
        
       $scope.fechaMinLlegada = function(){
        var fecMinLle = $scope.reservaVuelo.fechaSalidaVueloIda.toString();
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
        
        console.log("PUTA ciudad destino"+$scope.reservaVuelo.ciudadDestinoReserva),
        console.log("PUTA fecha regreso"+$scope.reservaVuelo.fechaSalidaVueloVuelta),
        $scope.minLlegadaDate = new Date(anioSalida,mesSalida,diaSalidaStr);
        if ($scope.reservaVuelo.fechaSalidaVueloIda != null)
        {
            document.getElementById('botonBuscar').style.display = 'block';
        }
        console.log("PUTA Tipo Reserva: "+$scope.reservaVuelo.tipoReserva);
    }
    
    $scope.generarCodigoIda = function(){
        var codigoCiudadOrigen;
        var codigoCiudadDestino;
        var codigoFechaSalida;
        var codigoFinal;
        if($scope.reservaVuelo.ciudadOrigenReserva!=null)
        {
            codigoCiudadOrigen = $scope.reservaVuelo.ciudadOrigenReserva.substring(0,1);
            if (codigoCiudadOrigen == "Q")
            {
                codigoCiudadDestino = "P";  
            }
            else
            {
                codigoCiudadDestino = "Q";
            }
        }
        if($scope.reservaVuelo.fechaSalidaVueloIda!=null)
        {
            var strFecSal = $scope.reservaVuelo.fechaSalidaVueloIda.toString();
            var codMesSalida;
            var codDiaSalida;
            var codAnioSalida;
            codMesSalida = strFecSal.substring(4,7);
            codDiaSalida = strFecSal.substring(8,10);
            codAnioSalida = strFecSal.substring(11,15);
            codigoFechaSalida = codDiaSalida.concat(codMesSalida.concat(codAnioSalida));
        }
        codigoFinal = codigoCiudadOrigen.concat(codigoCiudadDestino.concat(codigoFechaSalida));
        $scope.reservaVuelo.codigoVueloIda = codigoFinal;
        console.log("PUTA CODIGOvUELO IDA: "+$scope.reservaVuelo.codigoVueloIda);
    }
    
    $scope.generarCodigoVuelta = function(){
        var codigoCiudadOrigen;
        var codigoCiudadDestino;
        var codigoFechaSalida;
        var codigoFinal;
        if($scope.reservaVuelo.ciudadDestinoReserva!=null)
        {
            codigoCiudadOrigen = $scope.reservaVuelo.ciudadDestinoReserva.substring(0,1);
            if (codigoCiudadOrigen == "Q")
            {
                codigoCiudadDestino = "P";  
            }
            else
            {
                codigoCiudadDestino = "Q";
            }
        }
        if($scope.reservaVuelo.fechaSalidaVueloVuelta!=null)
        {
            var strFecSal = $scope.reservaVuelo.fechaSalidaVueloVuelta.toString();
            var codMesSalida;
            var codDiaSalida;
            var codAnioSalida;
            codMesSalida = strFecSal.substring(4,7);
            codDiaSalida = strFecSal.substring(8,10);
            codAnioSalida = strFecSal.substring(11,15);
            codigoFechaSalida = codDiaSalida.concat(codMesSalida.concat(codAnioSalida));
        }
        codigoFinal = codigoCiudadOrigen.concat(codigoCiudadDestino.concat(codigoFechaSalida));
        $scope.reservaVuelo.codigoVueloVuelta = codigoFinal;
        console.log("PUTA CODIGOvUELO vUELTA: "+$scope.reservaVuelo.codigoVueloVuelta);
        console.log("PUTA ELEMENTO ARREGLO"+cantReservas[cantReservas.length - 1]);
    }
    
    $scope.calcularNroAdultos = function(){
        var nroAdultos=$scope.reservaVuelo.cantidadAdultos;
        var nroNinios=$scope.reservaVuelo.cantidadNinios;
        var nroBebes=$scope.reservaVuelo.cantidadBebes;
        
        
        
        if (nroAdultos<nroBebes)
        {
            toastr.error("El numero de bebes no puede ser mayor que el numero de adultos");
            document.getElementById('botonBuscar').style.display = 'none';
        }
        if (nroAdultos>nroBebes && nroBebes !=null)
        {
            toastr.error("Debe viajar un adulto por cada bebe");
            document.getElementById('botonBuscar').style.display = 'block';
        }
    }
    
    $scope.calcularNroNinios = function(){
        var nroAdultos=$scope.reservaVuelo.cantidadAdultos;
        var nroNinios=$scope.reservaVuelo.cantidadNinios;
        var nroBebes=$scope.reservaVuelo.cantidadBebes;
        if (nroNinios>=nroAdultos)
        {
            toastr.success("Los niños deben viajar por lo menos con un adulto");
            document.getElementById('botonBuscar').style.display = 'block';
        }
        if (nroNinios<nroAdultos)
        {
            toastr.success("Los niños deben viajar por lo menos con un adulto");
            document.getElementById('botonBuscar').style.display = 'block';
        }
    }
    
    $scope.calcularNroBebes = function(){
        var nroAdultos=$scope.reservaVuelo.cantidadAdultos;
        var nroNinios=$scope.reservaVuelo.cantidadNinios;
        var nroBebes=$scope.reservaVuelo.cantidadBebes;
        if (nroAdultos<nroBebes)
        {
            toastr.error("El numero de bebes no puede ser mayor que el numero de adultos");
            document.getElementById('botonBuscar').style.display = 'none';
        }
        if (nroAdultos>nroBebes)
        {
            toastr.error("Debe viajar un adulto por cada bebe");
            document.getElementById('botonBuscar').style.display = 'block';
        }
        $scope.reservaVuelo.cantidadPersonas = $scope.reservaVuelo.cantidadNinios + $scope.reservaVuelo.cantidadBebes + $scope.reservaVuelo.cantidadAdultos;
        console.log("PUTA CantidadPER: "+$scope.reservaVuelo.cantidadPersonas);
    }
    
    var fechaReservaCtrl = new Date();
    var reservaAuxRand = Math.random()* (1000 - 1) + 1;;
    
    $scope.busquedaPorParametrosIda = function (){
        
        VueloAdminFactory.busquedaFechaIda(
        {
            fechaSalidaVuelo: $scope.reservaVuelo.fechaSalidaVueloIda,
            origenVuelo: $scope.reservaVuelo.ciudadOrigenReserva,
            
        }).$promise.then(
            function success(respuesta)
            {
                $scope.vuelos = respuesta;
                console.log("fechaIda"+$scope.reservaVuelo.fechaSalidaVueloIda);
                console.log("origenIda"+$scope.reservaVuelo.ciudadOrigenReserva);
                console.log(respuesta);
            },
            function error(error)
            {   
                console.log(error);
            });
        console.log("PUTA Fecha Reserva: "+fechaReservaCtrl);
        console.log("PUTA numero random: "+reservaAuxRand);
        document.getElementById('vuelosIdaEncontrados').style.display = 'block';
    }
    
    $scope.busquedaPorParametrosVuelta = function (){
        if ($scope.reservaVuelo.ciudadDestinoReserva != null)
        {
            if($scope.reservaVuelo.fechaSalidaVueloVuelta != null)
            {
                VueloAdminFactory.busquedaFechaVuelta(
                {
                    fechaSalidaVuelo: $scope.reservaVuelo.fechaSalidaVueloVuelta,
                    origenVuelo: $scope.reservaVuelo.ciudadDestinoReserva,
                    
                }).$promise.then(
                    function success(respuesta)
                    {
                        $scope.vuelo = respuesta;
                        console.log("fechaVuelta"+$scope.reservaVuelo.fechaSalidaVueloVuelta);
                        console.log("origenVuelta"+$scope.reservaVuelo.ciudadDestinoReserva);
                        console.log(respuesta);
                    },
                    function error(error)
                    {   
                        console.log(error);
                    });
                    
                    document.getElementById('vuelosVueltaEncontrados').style.display = 'block';
            }
        }

        
    }
    
    $scope.confirmarBusqueda = function(){
        ReservaAuxFactory.save(
        {
            tipoReserva: $scope.reservaVuelo.tipoReserva,
            fechaReserva: fechaReservaCtrl,
            fechaSalidaVueloIda: $scope.reservaVuelo.fechaSalidaVueloIda,
            fechaSalidaVueloVuelta: $scope.reservaVuelo.fechaSalidaVueloVuelta,
            ciudadOrigenReserva: $scope.reservaVuelo.ciudadOrigenReserva,
            ciudadDestinoReserva: $scope.reservaVuelo.ciudadDestinoReserva,
            cantidadPersonas: $scope.reservaVuelo.cantidadPersonas,
            cantidadAdultos: $scope.reservaVuelo.cantidadAdultos,
            cantidadNinios: $scope.reservaVuelo.cantidadNinios,
            cantidadBebes: $scope.reservaVuelo.cantidadBebes,
            codigoVueloVuelta: $scope.reservaVuelo.codigoVueloIda,
            codigoVueloIda: $scope.reservaVuelo.codigoVueloVuelta,
            codigoAux: reservaAuxRand,
            
        }).$promise.then(
            function success(respuesta)
            {
                $scope.reservaAux = respuesta;
                document.getElementById('confirmarParametros').style.display = 'block';
                
            },
            function error(error)
            {   
                console.log(error);
            });
    }
    
    $scope.buscarReservaAuxi = function()
    {
        ReservaAuxFactory.busquedaReservaAux(
        {
            codigoAux: reservaAuxRand
            
        }).$promise.then(
            function success(respuesta)
            {
                $scope.reservaAux = respuesta;
            },
            function error(error)
            {   
                console.log(error);
            });
    }
    
    $scope.minDate = new Date();
    
    
   
}]);