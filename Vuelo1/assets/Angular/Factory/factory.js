
applicacion.factory('AdminFactory',['$resource',function($resource){
    
    var factory = $resource(
        'http://flyingxdragons-dragmer.c9users.io:8080/Admin/:idAdmin',
    {
        idAdmin:'@idAdmin'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idAdmin:'@idAdmin'
                }
            
            }
         });
    
    return factory;
    
}]);

applicacion.factory('VueloAdminFactory',['$resource',function($resource){
    var factory = $resource(
        'http://flyingxdragons-dragmer.c9users.io:8080/Vuelo/:idVuelo',
    {
        idVuelo:'@idVuelo'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idVuelo:'@idVuelo'
                }
            },
         busquedaPorIdAdmin: 
            {
                url:'http://flyingxdragons-dragmer.c9users.io:8080/Vuelo?idAdmin=:idAdmin',
                method:'GET', 
                params:{
                    idAdmin:'@idAdmin'
                },
                isArray:true
            },
            busquedaFechaIda:
            {
                url:'http://flyingxdragons-dragmer.c9users.io:8080/Vuelo?fechaSalidaVuelo=:fechaSalidaVuelo&&origenVuelo=origenVuelo',
                method:'GET', 
                isArray:true
            },
            busquedaFechaVuelta:
            {
                url:'http://flyingxdragons-dragmer.c9users.io:8080/Vuelo?fechaSalidaVuelo=:fechaSalidaVuelo&&origenVuelo=origenVuelo',
                method:'GET', 
                isArray:true
            }
            
         });
    return factory;
}]);

applicacion.factory('VueloFactory',['$resource',function($resource){
    
    var factory = $resource(
        'http://flyingxdragons-dragmer.c9users.io:8080/Vuelo/:idVuelo',
    {
        idVuelo:'@idVuelo'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idVuelo:'@idVuelo'
                }
            
            }
         });
    
    return factory;
    
}]);

applicacion.factory('ReservaFactory',['$resource',function($resource){
    
    var factory = $resource(
        'http://flyingxdragons-dragmer.c9users.io:8080/Reserva/:idReserva',
    {
        idReserva:'@idReserva'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idReserva:'@idReserva'
                }
            
            }
         });
    
    return factory;
    
}]);

applicacion.factory('ReservaAuxFactory',['$resource',function($resource){
    
    var factory = $resource(
        'http://flyingxdragons-dragmer.c9users.io:8080/ReservaAux/:idReservaAux',
    {
        idReservaAux:'@idReservaAux'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idReservaAux:'@idReservaAux'
                }
            
            },
            busquedaReservaAux:
            {
                url:'http://flyingxdragons-dragmer.c9users.io:8080/reservaAux?codigoAux=codigoAux',
                method:'GET', 
                isArray:true
            }
         });
    
    return factory;
    
}]);

applicacion.factory('PersonaFactory',['$resource',function($resource){
    
    var factory = $resource(
        'http://flyingxdragons-dragmer.c9users.io:8080/Persona/:idPersona',
    {
        idPersona:'@idPersona'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idPersona:'@idPersona'
                }
            
            }
         });
    
    return factory;
    
}]);

applicacion.factory('PersonaAuxFactory',['$resource',function($resource){
    
    var factory = $resource(
        'http://flyingxdragons-dragmer.c9users.io:8080/PersonaAux/:idPersonaAux',
    {
        idPersona:'@idPersonaAux'
    },
         {
          actualizar: 
            {
                method:'PUT', 
                params:{
                    idPersona:'@idPersonaAux'
                }
            
            }
         });
    
    return factory;
    
}]);

