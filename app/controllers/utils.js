var sysLoader = function(obj,res,all){
	var _ = require('underscore');
	var System = require('../models/system');

	System.find(obj)
		.populate('_sysgroup')
		.populate('_room')
		.exec(function(err,systems){
			//convertir el result a json iterando con underscore
			var sysJson = _.map(systems,function(sys) {
				return sys.toJSON();
			});
			//return sysJson;
			if(all)
				res.send(sysJson);
			else
				res.send({insertedDoc:sysJson,status:"success",title:"Info.",description:"<span class='glyphicon glyphicon-ok'></span> Registro Guardado con exito"})
		});
}

var getNotes = function(obj,res,all){
	var _ = require('underscore');
	var User = require('../models/user');
	var State = require('../models/state');
	var System = require('../models/system');
	var Note = require('../models/note');

	Note.find(obj)
		.populate('_user')
		.populate('_severity')
		.populate('_systems')
		.exec(function(err,notes){
			//convertir el result a json iterando con underscore
			var notesJson = _.map(notes,function(note) {
				return note.toJSON();
			});
			if(all)
				res.send(notesJson);
			else
				res.send({insertedDoc:notesJson,status:"success",title:"Info.",description:"<span class='glyphicon glyphicon-ok'></span> Registro Guardado con exito"})
			//res.send(notesJson);
		});

}

var encriptPassword = function(text){
	var crypto = require('crypto')

		  , key = 'salt_from_the_user_document'
		  , plaintext = text
		  , cipher = crypto.createCipher('aes-256-cbc', key)
		  , decipher = crypto.createDecipher('aes-256-cbc', key);
		  
		cipher.update(plaintext, 'utf8', 'base64');
		var encryptedPassword = cipher.final('base64')
		 
		decipher.update(encryptedPassword, 'base64', 'utf8');
		var decryptedPassword = decipher.final('utf8');
		 
		//console.log('encrypted :', encryptedPassword);
		//console.log('decrypted :', decryptedPassword);
		return encryptedPassword;

}

module.exports.getNotes  = getNotes;
module.exports.sysLoader  = sysLoader;
module.exports.encriptPassword  = encriptPassword;