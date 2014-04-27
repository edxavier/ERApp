var User = require('../models/user');
var State = require('../models/state');
var System = require('../models/system');
var Group = require('../models/sysGroup');
var Room = require('../models/room');
var Note = require('../models/note');
var mw= require('../middlewares/bitacoraMid');//middleware
var _ = require('underscore');

var bitacoraCtrl = function  (server) {


	server.get('/templates/nuevaNota.html',function(req,res){

		res.sendfile('./app/views/templates/nuevaNota.html');
	});
	
	server.get('/templates/notaslist.html',function(req,res){
		//res.render('templates/notasList');
		res.sendfile('./app/views/templates/notasList.html');
	});
	server.get('/templates/systemsCatalog',function(req,res){
		//res.render('templates/notasList');
		res.sendfile('./app/views/templates/newSys.html');
	});
	server.get('/templates/myProfile',function(req,res){
		//res.render('templates/notasList');
		res.sendfile('./app/views/templates/myProfile.html');
	});
	server.get('/turnoEntrega.html',function(req,res){
		//res.render('templates/notasList');
		res.sendfile('./app/views/templates/turnoEntrega.html');
	});

	server.get('/getNotaslist',function(req,res){
		var utilities= require('./utils');//middleware
		var obj= {};//todos los obj
		var pass= utilities.getNotes(obj,res,true)

	});


//Enviar lista de sistemas
	server.get('/getSystems',function(req,res){
		var utilities= require('./utils');//middleware
		var obj= {};//todos los obj
		var pass= utilities.sysLoader(obj,res,true)//pasamos el filtro y el res para responder desde la funcion
		//true indica que me retorne solo todos los objetos encontrados
	
	});

//Enviar lista de estados
	server.get('/getStates',function(req,res){

		State.find({})
		.exec(function(err,states){
			//convertir el result a json iterando con underscore
			var Json = _.map(states,function(state) {
				return state.toJSON();
			});
			res.send(Json);
		});
		
	});

	//Enviar lista de salas
	server.get('/getRomms',function(req,res){

		Room.find({})
		.exec(function(err,rooms){
			//convertir el result a json iterando con underscore
			var Json = _.map(rooms,function(room) {
				return room.toJSON();
			});
			res.send(Json);
		});
		
	});

	//Enviar lista de salas
	server.get('/getsysGroups',function(req,res){

		Group.find({})
		.exec(function(err,groups){
			//convertir el result a json iterando con underscore
			var Json = _.map(groups,function(group) {
				return group.toJSON();
			});
			res.send(Json);
		});
		
	});

	server.post('/saveNota',function(req,res){
		console.log("Save nota called!!")
		try
		  {
		  		var utc = new Date();//obtener la fecha y hora
				utc.setHours(utc.getHours()+6);//aumentar 6 horas a la hora obtenida
				Note.count({}, function( err, count){
					if(!err){//si no ocurrio un error
		    			var nota = new Note({
							_id:count+1,
							description:req.body.noteModel ,
							_severity: req.body.severity,
							_systems:req.body.systemsTags,
							_user:req.session.user,
							savedOn:utc
						});
						nota.save(function(err,note){
							if(err){
								res.send({status:"danger",title:"Error.",description:"<span class='glyphicon glyphicon-remove'></span> Fallo al guardar la nota > "+err})
								return;
							}
							var utilities= require('./utils');//middleware
							var obj= {_id:note._id};//todos los obj
							var pass= utilities.getNotes(obj,res,false)

							//res.send({status:"success",title:"Info.",description:"<span class='glyphicon glyphicon-ok'></span> Nota publicada con exito"})
						});
		    		}
				});
		}
		catch(err)
		  {
		  	res.send({status:"danger",title:"Error.",description:"<span class='glyphicon glyphicon-remove'></span>  Error Inesperado > "+err})
		  }
	});

	server.post('/saveSystem',function(req,res){
		console.log("Save sys called!!")
		try
		  {
				System.count({}, function( err, count){
					if(!err){//si no ocurrio un error
		    			var sys = new System({
							_id:count+1,
							name:req.body.name,
							description:req.body.description ,
							_sysgroup: req.body._sysgroup,
							_room:req.body._room
						});
						sys.save(function(err,sys){
							if(err){
								res.send({status:"danger",title:"Error.",description:"<span class='glyphicon glyphicon-remove'></span> Fallo al guardar > "+err})
								return;
							}
							//el metodo save me retorna el objeto recien insertado pero si la population, es x eso q se hace la busqueda nuevamente del objeto populado
							var utilities= require('./utils');//middleware
							var obj= {_id:sys._id};//todos los obj
							var pass= utilities.sysLoader(obj,res,false)//pasamos el filtro y el res para responder desde la funcion
							
						});
		    		}
				});
		}
		catch(err)
		  {
		  	res.send({status:"danger",title:"Error.",description:"<span class='glyphicon glyphicon-remove'></span>  Error Inesperado > "+err})
		  }
	});


}

module.exports = bitacoraCtrl;