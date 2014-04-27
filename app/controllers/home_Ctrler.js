
var mw= require('../middlewares/homeMiddle');//middleware

var homeController = function  (server) {


	server.get('/',mw.isLogedIn,function(req,res){
		//res.send('home aun no esta listo');
		var date = new Date();
		var fullYear = date.getFullYear();
		res.render('index',{user:req.session.user,year:fullYear});
		//res.sendfile('./app/views/index.html');
	});


}

module.exports = homeController;
