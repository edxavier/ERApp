var dbModel = require('./mongodb');
	Schema = dbModel.Schema;

var roomSchema = Schema({
	_id:Number,
	name: String,
	description: String
});

var Room= dbModel.model('room',roomSchema);

module.exports = Room;