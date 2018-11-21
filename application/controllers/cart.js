const { ProductRepository } = require('./../../infraestructure/repositories');

class CartController {
	async getCart(req, res) {
		const products = (await req.user.populate('cart.items.productId').execPopulate()).cart.items;
		return res.render('shop/cart', {
			path: '/cart',
			pageTitle: 'Your Cart',
			products,
			isAuthenticated: req.session.isLoggedIn
		});
	}

	async createCart(req, res) {
		const { productId } = req.body;
		const product = await ProductRepository.getProduct(productId);
		req.user.addToCart(product);
		return res.redirect('/cart');
	}

	deleteProduct(req, res) {
		const { productId } = req.body;
		req.user.removeFromCart(productId);
		return res.redirect('/cart');
	}
}

module.exports = new CartController();
