db.states.drop()
db.states.save({
		_id: db.states.count()+1,
		title: 'Normal',
		description: 'Sin eventos que reportar',
		css: 'normal'
});

db.states.save({
		_id: db.states.count()+1,
		title: 'Informacional',
		description: 'Nota informacional que no representa ninguna incidencia.',
		css: 'info'
});

db.states.save({
		_id: db.states.count()+1,
		title: 'Trabajos',
		description: 'Trabajos de instalacion, mantenimiento o reparacion.',
		css: 'trabajos'
});

db.states.save({
		_id: db.states.count()+1,
		title: 'Menor',
		description: 'Incidencias que fueron resueltas en el turno si mucha dificultad.',
		css: 'menor'
});

db.states.save({
		_id: db.states.count()+1,
		title: 'Medio',
		description: 'Incidencias con implicaciones considerable, que pueden ser o no resuelta en el turno.',
		css: 'medio'
});

db.states.save({
		_id: db.states.count()+1,
		title: 'Mayor',
		description: 'Incidencias con implicaciones mayres que afectan el buen funcionamiento de los sistemas, que pueden ser o no resuelta en el turno.',
		css: 'mayor'
});