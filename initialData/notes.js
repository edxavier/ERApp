db.notes.save({
		_id: (db.notes.count())+1,
		description: 'Primera nota, solo se esta haciendo para prueba',
		_severity: 1,
		_systems:[1,2],
		_user:1,
		savedOn: new Date()
});