//  mongo localhost/stecnica Documentos/node/initialData/users.js 
db.users.drop();
db.users.save({
		_id: db.users.count()+1,
		username: 'erojas',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Eder Xavier',
		lastName: 'Rojas',
		imgUrl: ''
});

db.users.save({
		_id: db.users.count()+1,
		username: 'emoncada',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Eveling ',
		lastName: 'Moncada',
		imgUrl: ''
});

db.users.save({
		_id: db.users.count()+1,
		username: 'gcollado',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Gabriela',
		lastName: 'Collado',
		imgUrl: ''
});

db.users.save({
		_id: db.users.count()+1,
		username: 'clopez',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Christian ',
		lastName: 'Lopez',
		imgUrl: ''
});

db.users.save({
		_id: db.users.count()+1,
		username: 'cbaltodano',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Carlos F.',
		lastName: 'Baltodano',
		imgUrl: ''
});
db.users.save({
		_id: db.users.count()+1,
		username: 'esaenz',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Erick',
		lastName: 'Saenz',
		imgUrl: ''
});
db.users.save({
		_id: db.users.count()+1,
		username: 'bjarquin',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Blanca R.',
		lastName: 'Jarquin',
		imgUrl: ''
});
db.users.save({
		_id: db.users.count()+1,
		username: 'osaravia',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Otoniel A.',
		lastName: 'Saravia',
		imgUrl: ''
});
db.users.save({
		_id: db.users.count()+1,
		username: 'bincer',
		password: 'VVAk+KiAo7bMXg9zBYi5og==',
		active: true,
		acces:{
				level:0,
				group:'root'
			},
		firstName: 'Bismark',
		lastName: 'Incer',
		imgUrl: ''
});