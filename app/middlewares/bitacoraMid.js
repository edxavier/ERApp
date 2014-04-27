 var obj = {}
 obj.getSystem = function (obj) {
		var System = require('../models/system');
		var Group = require('../models/sysGroup');
		var Room = require('../models/room');
		var _ = require('underscore');

		System.find({})
		.populate('_sysgroup')
		.populate('_room')
		.exec(function(err,systems){
			//convertir el result a json iterando con underscore
			var sysJson = _.map(systems,function(sys) {
				return sys.toJSON();
			});
			return sysJson;
		});

}

module.exports = obj