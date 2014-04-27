var dbModel = require('./mongodb');
	Schema = dbModel.Schema;

var stateSchema = Schema({//definir el esquema del documento (estructura/campos)
	_id: Number,
	title: String,
	description: String,
	css: String,
});

var State = dbModel.model('state',stateSchema);

module.exports = State;