

exports.isLogedIn = function (req,res,next) {
		if(!req.session.user){
			res.redirect('/login');
			return;
		}
		next();
	}


//**************** MIDLEWARES begin *********************
exports.hasSession = function (req,res,next) {
		if(req.session.user){
			res.redirect('/');//si ya existe una sesion redirecciona al /
			return;
		}
		next();
	}

exports.authenticate = function (req,res,next) {
		var User = require('../models/user');
		var utilities= require('../controllers/utils');//middleware
		encryptedPassword = utilities.encriptPassword(req.body.password);
		//encontrar un usuario donde el usuario y password sean como los del request
		User.findOne({username:req.body.username,password:encryptedPassword},function(err,user){
			req.user=user;
			next();
		});		
	}




//**************** MIDLEWARES end *********************
//module.exports = isLogedIn;