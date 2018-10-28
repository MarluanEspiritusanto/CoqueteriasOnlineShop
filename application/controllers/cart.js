class CartController {
	getCart(req, res) {
		return res.render('shop/cart', {
			path: '/cart',
			pageTitle: 'Your Cart',
			products: []
		});
	}

	createCart(req, res) {
		const { cart } = req.body;
		return res.redirect('/cart');
	}

	deleteProduct(req, res) {
		const { prodId } = req.body;
		return res.redirect('/cart');
	}
}

module.exports = new CartController();
