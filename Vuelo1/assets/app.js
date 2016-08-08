var applicacion = angular.module('app', ['ui.router','ngAnimate','ngResource','toastr']);

applicacion.config(function ($stateProvider, $urlRouterProvider) {


    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
    $urlRouterProvider.otherwise("/");
    //
    // VISTAS DE NUESTRA APLICACION
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "Angular/Rutas/home.html",
            controller: 'homecontroller'
        })
        .state('admin', {
            url: "/admin",
            templateUrl: "Angular/Rutas/admin.html",
            controller: 'AdminController'
        
        })
       .state('vueloadmin', {
            url: "/vuelo/:idAdmin",
            templateUrl: "Angular/Rutas/vueloadmin.html",
            controller: 'VueloAdminController'
        
        })
        .state('editarvuelo', {
            url: "/editar/:idVuelo",
            templateUrl: "Angular/Rutas/editarvuelo.html",
            controller: 'EditarVueloController'
        
        })
       .state('vuelo', {
            url: "/vuelo",
            templateUrl: "Angular/Rutas/vuelo.html",
            controller: 'VueloController'
        
        })
        
        .state('reserva', {
            url: "/reserva/:idVuelo",
            templateUrl: "Angular/Rutas/reserva.html",
            controller: 'ReservaController'
        
        })
        
         .state('buscar', {
            url: "/buscar",
            templateUrl: "Angular/Rutas/buscar.html",
            controller: 'BuscarController'
        
        })
        
        .state('reservaAux', {
            url: "/reservaaux/:idReservaAux",
            templateUrl: "Angular/Rutas/reservaaux.html",
            controller: 'ReservaAuxController'
        
        })
        .state('PersonaAux', {
            url: "/personaaux",
            templateUrl: "Angular/Rutas/personaaux.html",
            controller: 'PersonaAuxAuxController'
        
        });



});





