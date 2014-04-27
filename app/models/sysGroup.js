var dbModel = require('./mongodb');
	Schema = dbModel.Schema;

var sysGroupSchema = Schema({//definir el esquema del documento (estructura/campos)
	_id: Number,
	name: String,
	description: String
});

var SysGroup = dbModel.model('sysgroup',sysGroupSchema);

module.exports = SysGroup;