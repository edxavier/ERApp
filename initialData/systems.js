db.systems.drop()
db.systems.save({
		_id: db.systems.count()+1,
		name: 'SDD8',
		description: 'Situation Data Display',
		_sysgroup: 1,
		_room:1
});

db.systems.save({
		_id: db.systems.count()+1,
		name: 'SDD7',
		description: 'Situation Data Display',
		_sysgroup: 1,
		_room:1
});
db.systems.save({
		_id: db.systems.count()+1,
		name: 'SDD1',
		description: 'Situation Data Display',
		_sysgroup: 1,
		_room:1
});

db.systems.save({
		_id: db.systems.count()+1,
		name: 'IFV-UCS4',
		description: 'Impresora de Fichas de Vuelo',
		_sysgroup: 1,
		_room:1
});