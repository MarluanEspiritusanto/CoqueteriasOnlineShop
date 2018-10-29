const { PORT } = require('./infraestructure/config');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path');
const { UserModel } = require('./domain/entities');

class Server {
	static async start() {
		try {
			server.use(express.static(path.join(__dirname, '/application/public')));

			server.use(bodyParser.urlencoded({ extended: false }));
			server.use(bodyParser.json());

			server.set('view engine', 'ejs');
			server.set('views', './application/views');

			server.use((req, res, next) => {
				UserModel.findById('5bd661dc4bd7593159b3aa91')
					.then(user => {
						req.user = user;
						next();
					})
					.catch(console.log);
			});

			// Injecting routes to express instance
			const RouterInjector = require('./application/routes');
			RouterInjector.inject(server);

			// Database Connection
			const connection = require('./infraestructure/database/connection');
			await connection();

			// Default user config

			UserModel.findOne().then(user => {
				if (!user) {
					const user = new UserModel({
						name: 'Marluan',
						email: 'Marluan@test.com',
						cart: {
							items: []
						}
					});
					user.save();
				}
			});

			server.listen(PORT, () => {
				console.log(`Application running on port ${PORT}`);
			});
		} catch (ex) {
			console.log(ex);
			process.exit();
		}
	}
}

// Startup application
Server.start();
