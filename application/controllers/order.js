class OrderController {
	constructor() {}

	getOrder(req, res) {
		const { id } = req.params;
	}

	getOrders(req, res) {
		res.render('shop/orders', {
			path: '/orders',
			pageTitle: 'Your Orders'
		});
	}
}

module.exports = new OrderController();
