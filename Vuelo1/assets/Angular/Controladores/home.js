applicacion.controller('homecontroller',['$scope','$http','AdminFactory','toastr', function($scope, $http, AdminFactory, toastr){
    toastr.info('Info','Entraste a home');
    console.log('Entraste a home');
    
    
    AdminFactory.query().$promise.then(
        function correctoLlamaAdmin(respuesta){
         console.log(respuesta);
            $scope.admin = respuesta;
            console.log($scope.admin);
        },
        function errorNoLlamoUsuarios(error){
            console.log(error);
        });
    

    
}]);