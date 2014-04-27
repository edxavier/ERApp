

var sto = angular.module('salaTecnica');




sto.controller('notasCtrl2', function($scope,$http,$modal,$alert,bitacoraFactory){

//myAlert.show
  // Pre-fetch an external template populated with a custom scope
  


 $scope.addSystem=function(isValid){
    if (isValid) {
      //console.log($scope.sysCatalog);
        $http.post('/saveSystem', $scope.sysCatalog)
            .success(function(data) {
                
                $scope.alert={
                    title: data.title,
                    content: data.description,
                    type: data.status
                  }
                  console.log(data);
                if( data.status === "success")
                     $scope.Systems.push(data.insertedDoc[0])
                $scope.sysCatalog = {};
            })
    }
   
  }

  $http.get('/getSystems').success(function(data) {
   //$http.get('http://192.168.137.150/st/Controlador/getNotas.php').success(function(data) {
    $scope.Systems = data;
  });

  $http.get('/getRomms').success(function(data) {
   //$http.get('http://192.168.137.150/st/Controlador/getNotas.php').success(function(data) {
    $scope.Rooms = data;
  });

  $http.get('/getsysGroups').success(function(data) {
   //$http.get('http://192.168.137.150/st/Controlador/getNotas.php').success(function(data) {
    $scope.sysGroups = data;
  });

})