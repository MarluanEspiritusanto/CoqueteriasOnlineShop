class CheckoutController {
	constructor() {}

	index(req, res) {
		return res.render('shop/checkout', {
			path: '/checkout',
			pageTitle: 'Checkout'
		});
	}
}

module.exports = new CheckoutController();
