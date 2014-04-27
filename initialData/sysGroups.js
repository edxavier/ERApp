db.sysgroup.drop()
db.sysgroups.drop()

db.sysgroups.save({
		_id: db.sysgroups.count()+1,
		name: 'Aircon',
		description: 'Sistema de procesamiento de datos radar'
});

db.sysgroups.save({
		_id: db.sysgroups.count()+1,
		name: 'SDC',
		description: 'Sistema de comunicaciones'
});