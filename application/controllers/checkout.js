class CheckoutController {
	constructor() {}

	index(req, res) {
		return res.render('shop/checkout', {
			path: '/checkout',
			pageTitle: 'Checkout',
			isAuthenticated: req.session.isLoggedIn
		});
	}
}

module.exports = new CheckoutController();
