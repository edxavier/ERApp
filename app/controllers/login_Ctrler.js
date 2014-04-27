var mw= require('../middlewares/homeMiddle');//middleware

var loginController = function  (server) {
	
	

//**************** ROUTES begin *********************
	server.get('/login',mw.hasSession,function(req,res){//al recivir la pticion ejecuta la func isLogedIn primero
		//res.send('Aqui deberas identificarte');
		var date = new Date();
		var fullYear = date.getFullYear();
		visiblemsg=false;
		res.render('login',{year:fullYear,visible:visiblemsg});//renderea (dibuja o reproduce) la pagina login y pasale year 
	});

	server.get('/getCurUser',function(req,res){//al recivir la pticion ejecuta la func isLogedIn primero
		//res.send('Aqui deberas identificarte');
		res.send(req.session.user);		
	});

	server.post('/updateuser',function(req,res){//al recivir la pticion ejecuta la func isLogedIn primero
		//res.send('Aqui deberas identificarte');
		var utilities= require('./utils');//middleware
		var User = require('../models/user');

		var fname = req.body.firstName;
		var lname = req.body.lastName;
		if(req.body.createNewPass)
				var pass= utilities.encriptPassword(req.body.newPassword)
		else 
				var pass= req.body.password;

		User.update( { _id: req.body._id }, { password: pass, fisrtName:fname, lastName:lname}, function (err, numberAffected, raw) {
			  if (err) {
			  	console.log("ERROR "+ err);
			  	res.send({status:"danger",title:"Error.",description:"<span class='glyphicon glyphicon-remove'></span> Fallo al guardar > "+err})
			  	return
			  }
			  res.send({status:"success",title:"Info.",description:"<span class='glyphicon glyphicon-ok'></span> Datos Actualizados"})	
			});
		
	});

	server.post('/log-me-in',mw.authenticate,function(req,res){
		//res.send('te has identificado');
		if(req.user){
			req.session.user=req.user;
			res.redirect('/')
		}else{
			var date = new Date();
			var fullYear = date.getFullYear();
			visiblemsg=true;
			res.render('login',{year:fullYear,visible:visiblemsg});			
		}
	});
	server.get('/log-me-out',function(req,res){
		//res.send('te has identificado');
		req.session.destroy();
		res.redirect('/login')
	});
//**************** ROUTES end *********************

}

module.exports = loginController;