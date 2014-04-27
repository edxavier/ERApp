var dbModel = require('./mongodb');
	Schema = dbModel.Schema;

var systemSchema = Schema({
	_id:Number,
	name: String,
	description: String,
	_sysgroup:{type:Number, ref:'sysgroup'},
	_room:{type:Number, ref:'room'}
});

var System = dbModel.model('system',systemSchema);

module.exports = System;