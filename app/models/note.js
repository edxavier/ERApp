var dbModel = require('./mongodb');
	Schema = dbModel.Schema;

var noteSchema = Schema({
	_id:Number,
	description: String,
	_severity: {type:Number, ref:'state'},
	_systems:[{type:Number, ref:'system'}],
	_user:{type:Number, ref:'user'},
	savedOn:{type:Date,default: Date.now}
	
});

var Note = dbModel.model('note',noteSchema);

module.exports = Note;