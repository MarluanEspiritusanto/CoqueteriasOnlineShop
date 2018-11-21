const { ProductService } = require('../../services');

class ShopController {
	async index(req, res) {
		const products = await ProductService.getProducts();
		res.render('shop/index', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			isAuthenticated: req.session.isLoggedIn
		});
	}
}

module.exports = new ShopController();
