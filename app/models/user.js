var dbModel = require('./mongodb');
	Schema = dbModel.Schema;

var userSchema = Schema({
	_id:Number,
	username: String,
	password: String,
	active: Boolean,
	acces:{
			level:Number,
			group:String
		},
	firstName: String,
	lastName: String,
	imgUrl: String
});

var User = dbModel.model('user',userSchema);

module.exports = User;