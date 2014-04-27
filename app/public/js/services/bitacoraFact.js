var sto= angular.module('salaTecnica');

sto.factory('bitacoraFactory', function ($http) {
     //'use strict';
      function format(state) {
        return "<span class='glyphicon glyphicon-flag'  ></span>  " + state.text;
	  }

     var bitacoraFactory = { };
     //#############################INIT DATA###############################################
 				//cargar todas las notas
                bitacoraFactory.NotesListInit = $http.get("/getNotaslist").success(function(data) {
                        bitacoraFactory.notas = data;
                });
                //cargar todas estados
                bitacoraFactory.InitStates = $http.get("/getStates").success(function(data) {
                        bitacoraFactory.states = data;
                });
                //cargar todas sistemas
                bitacoraFactory.InitSystems = $http.get("/getSystems").success(function(data) {
                        bitacoraFactory.systems = data;
                        //console.log("Init Systems");
                });
                //cargar todas grupos
                bitacoraFactory.InitGroups = $http.get("/getsysGroups").success(function(data) {
                        bitacoraFactory.groups = data;
                });
                //cargar todas las rooms
                bitacoraFactory.InitRooms = $http.get("/getRomms").success(function(data) {
                        bitacoraFactory.rooms = data;
                });
                //Obtener el usuario actual
                bitacoraFactory.LoadCurrentUser = $http.get("/getCurUser").success(function(data) {
                        bitacoraFactory.user = data;
                        //console.log("User: "+ data);
                });
 				
//#############################END INIT DATA###############################################

//#############################GETTERS#####################################################
 				//devolver las notas si estan listas
                bitacoraFactory.getNotas = function(callback) {
                        bitacoraFactory.NotesListInit.then(function() {
                                callback(bitacoraFactory.notas);
                        });
                };
                //reotornar el usuario
                bitacoraFactory.getCurUser = function(callback) {
                        bitacoraFactory.LoadCurrentUser.then(function() {
                                callback(bitacoraFactory.user);
                        });
                };
                 //reotornar estados
                bitacoraFactory.getStates = function(callback) {
                        bitacoraFactory.InitStates.then(function() {
                                callback(bitacoraFactory.states);
                        });
                };
                 //reotornar el usuario
                bitacoraFactory.getSystems = function(callback) {
                        bitacoraFactory.InitSystems.then(function() {
                                callback(bitacoraFactory.systems);
                        });
                };
                 //reotornar el usuario
                bitacoraFactory.getGroups = function(callback) {
                        bitacoraFactory.InitGroups.then(function() {
                                callback(bitacoraFactory.groups);
                        });
                };
                 //reotornar el usuario
                bitacoraFactory.getRooms = function(callback) {
                        bitacoraFactory.InitRooms.then(function() {
                                callback(bitacoraFactory.rooms);
                        });
                };
                bitacoraFactory.optionsSelect2= {
										             formatResult: format,
										             formatSelection: format,
										             escapeMarkup: function(m) { return m; }
										        }
				bitacoraFactory.tinymceOptions={
											        language : 'es',
											        plugins: "advlist autolink link  lists charmap print preview fullscreen insertdatetime save textcolor wordcount template",
											        statusbar : false,
											        //toolbar: "undo redo bold italic underline  bullist numlist",
											        theme_advanced_font_sizes: "10px,12px,13px",
											        font_size_style_values: "12px,13px,14px",
											        templates : [
											          {
											              title: "Entrega de turno",
											              url: "/turnoEntrega.html",
											              description: "Entrega de tirno sin incidencias"
											          },
											          {
											              title: "Timestamp",
											              url: "time.htm",
											              description: "Adds an editing timestamp."
											          }
											        ]
											    };

//#############################END GETTERS#####################################################

//############################SETTER######################################################
	bitacoraFactory.saveSystem=function(sysObj,callback) {
							     $http.post('/saveSystem', sysObj).success(function(data){
							     		bitacoraFactory.systems.push(data.insertedDoc[0])//agregar el sistema nuevo al array
							     		callback(data)
							     });
							    }
	bitacoraFactory.saveNote=function(Obj,callback) {
							     $http.post('/saveNota', Obj).success(function(data){
							     		bitacoraFactory.notas.push(data.insertedDoc[0])//agregar el sistema nuevo al array
							     		callback(data)
							     });
							    }
  
     return bitacoraFactory;
  })