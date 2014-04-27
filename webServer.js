var express = require('express.io');
	swig = require('swig');
	server = express();
	server.http().io();//Configurar para que arranque Socket IO
//var User = require('./app/models/user');



//configuracion para desplegar vistas
	server.engine('html',swig.renderFile);
	server.set('view engine','html');
	server.set('views',__dirname+'/app/views');
	server.set('view cache', false);
	// To disable Swig's cache, do the following:
	swig.setDefaults({ cache: false });

	//agregar post, cookie y sesiones
	server.configure(function(){
		server.use(express.logger());
		server.use(express.cookieParser());
		server.use(express.bodyParser());
		server.use(express.methodOverride());
		server.use(express.favicon());
		server.use(express.favicon('./app/public/imagenes/favicon.ico')); 	
		server.use(express.session({
			secret : "fatima"
		}));
	});

	//Configurar para que cargue achivos Estaticos (javascript,css)
	server.use(express.static(__dirname+'/app/public'));



	//Controllers (controladores de peticiones o rutas)
	var homeCtrl = require(__dirname+'/app/controllers/home_Ctrler');
	var loginCtrl = require(__dirname+'/app/controllers/login_Ctrler');
	var bitacoraCtrl = require(__dirname+'/app/controllers/bitacoraCtrl');
	homeCtrl(server);	
	loginCtrl(server);
	bitacoraCtrl(server);


	
	server.listen(80);
	console.log("el servidor esta corriendo http://localhost:8080");
/*
	var user = new User({
		_id:1,
		username: 'erojas',
		password: '12345',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Eder Xavier',
		lastName: 'Rojas',
		imgUrl: ''
	});

	user.save(function(err){
		if(err){
			console.log('Ocurrio un error al guardar ');
			return;
		}
		console.log('Registro guardado');

	});
*/