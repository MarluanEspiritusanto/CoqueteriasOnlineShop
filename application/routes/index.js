const AdminRouter = require('./admin');
const ShopRouter = require('./shop');

class Router {
	constructor() {}

	inject(expressInstance) {
		expressInstance.use('/admin', AdminRouter.router);
		expressInstance.use('/', ShopRouter.router);
	}
}

module.exports = new Router();
