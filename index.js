const { PORT, MONGO_URI } = require('./infraestructure/config');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const path = require('path');
const { UserModel } = require('./domain/entities');

class Server {
	static async start() {
		try {
			const store = new MongoDBStore({
				uri: MONGO_URI,
				collection: 'sessions'
			});
			server.use(express.static(path.join(__dirname, '/application/public')));

			server.use(bodyParser.urlencoded({ extended: false }));
			server.use(bodyParser.json());

			server.use(
				session({
					secret: 'my secret',
					resave: false,
					saveUninitialized: false,
					store
				})
			);

			server.set('view engine', 'ejs');
			server.set('views', './application/views');

			server.use((req, res, next) => {
				if (!req.session.user) {
					return next();
				}
				UserModel.findById(req.session.user._id)
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
