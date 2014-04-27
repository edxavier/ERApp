db.rooms.drop()
db.rooms.save({
		_id: db.rooms.count()+1,
		name: 'Sala Tecnica',
		description: 'Sala de los principales servidores Aircon y SDC'
});

db.rooms.save({
		_id: db.rooms.count()+1,
		name: 'APP',
		description: 'Sala de control aproximacion'
});