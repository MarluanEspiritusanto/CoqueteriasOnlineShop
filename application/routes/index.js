const AdminRouter = require('./admin');
const ShopRouter = require('./shop');
const AuthRouter = require('./auth');

class Router {
	constructor() {}

	inject(expressInstance) {
		expressInstance.use('/admin', AdminRouter.router);
		expressInstance.use('/', ShopRouter.router);
		expressInstance.use('/', AuthRouter.router);
	}
}

module.exports = new Router();
