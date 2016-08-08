applicacion.controller('AdminController',['$scope','$http','AdminFactory','toastr', function($scope, $http, AdminFactory, toastr){
    toastr.info('Info','Entraste a admin');
    console.log('Entraste a admin');
    
    $scope.nuevoAdmin = {
        username:'',
        password:''
    }
    
    $scope.agregarNuevoAdmin = function(){
        
        AdminFactory.save({
            username: $scope.nuevoAdmin.username,
            password: $scope.nuevoAdmin.password
        })
        .$promise.then(
        function correctoLlamoAdmin(respuesta){
            console.log(respuesta);
            //$scope.usuarios.push(respuesta);
            $scope.nuevoAdmin = {
                                        username:'',
                                        password:''
                                    };
            toastr.success('Correctamente!', 'Usuario Ingresado');
        },
        function errorNoLlamoAdmin(error){
            console.log(error);
        });
    }
    
    }]);
    
