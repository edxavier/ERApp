var sto = angular.module('salaTecnica');

//controlador para mostras las notas en el home
sto.controller('notasCtrl', function($scope,$sce,bitacoraFactory){

   bitacoraFactory.getNotas( function(notas) {
               $scope.bitacora = notas;
      });
});

//Controlador para maenjar el profile del user
sto.controller('userCtrl', function($scope,$http,$sce,bitacoraFactory){

   bitacoraFactory.getCurUser( function(user) {
               $scope.currentUser = user;
      });
   //funcion para actualizar datos de usuario
   $scope.updateUser=function(isValid){
    if (isValid) {
        $http.post('/updateUser', $scope.currentUser)
            .success(function(data) {                
                $scope.alert={
                    title: data.title,
                    content: data.description,
                    type: data.status
                  }          
                  $scope.currentUser.newPassword="";
                  $scope.currentUser.createNewPass=false;
                  $scope.currentUser.updateNames=false;
                  $scope.currentUser.updateLNames=false;
            })
    }   
  }
  // fin de updateUser
});

//Controlador de la vista para crear una nueva nota
sto.controller('nuevaNotaCtrl', function($scope,$http,$sce,bitacoraFactory){

   bitacoraFactory.getStates( function(states) {
               $scope.States = states;
      });
   bitacoraFactory.getSystems( function(systems) {
               $scope.Systems = systems;
      });

   //Opciones del editor de texto TINY
   $scope.tinymceOptions = bitacoraFactory.tinymceOptions
    //opciones del ui select2
    $scope.optionsSelect2 = bitacoraFactory.optionsSelect2;
  // fin Opciones

  $scope.formData={};
  $scope.postNote=function(isValid){
    if (isValid) {
    	bitacoraFactory.saveNote( $scope.formData,function(data) {
                $scope.formData = {};
                $scope.alert={
                    title: data.title,
                    content: data.description,
                    type: data.status
                  }
                console.log(data);
            })        
    }   
  }
  
});

//Controlador de la vista para crear nuevo sistema
sto.controller('nuevaSistemaCtrl', function($scope,$http,$sce,bitacoraFactory){

   bitacoraFactory.getRooms( function(romms) {
               $scope.Rooms = romms;
      });
   bitacoraFactory.getGroups( function(groups) {
               $scope.sysGroups = groups;
      });

	bitacoraFactory.getSystems( function(systems) {
	               $scope.Systems = systems;
	      });

   //Opciones del editor de texto TINY
   $scope.tinymceOptions = bitacoraFactory.tinymceOptions
    //opciones del ui select2
   $scope.optionsSelect2 = bitacoraFactory.optionsSelect2;
  // fin Opciones

 $scope.addSystem=function(isValid){
    if (isValid) {
    	 bitacoraFactory.saveSystem( $scope.sysCatalog, function(data) {
	               $scope.alert={
                    title: data.title,
                    content: data.description,
                    type: data.status
                  }
                $scope.sysCatalog = {};
	      });      
    }   
  }
  
});