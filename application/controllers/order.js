const { OrderModel } = require('../../domain/entities');

class OrderController {
	constructor() {}

	getOrder(req, res) {
		const { id } = req.params;
	}

	async getOrders(req, res) {
		const orders = await OrderModel.find({ 'user.userId': req.user._id });
		res.render('shop/orders', {
			path: '/orders',
			pageTitle: 'Your Orders',
			orders
		});
	}

	createOrder(req, res) {
		req.user
			.populate('cart.items.productId')
			.execPopulate()
			.then(user => {
				const products = user.cart.items.map(i => {
					return { quantity: i.quantity, product: { ...i.productId._doc } };
				});
				const order = new OrderModel({
					user: {
						name: req.user.name,
						userId: req.user
					},
					products: products
				});
				return order.save();
			})
			.then(result => {
				return req.user.clearCart();
			})
			.then(() => {
				res.redirect('/orders');
			})
			.catch(err => console.log(err));
	}
}

module.exports = new OrderController();
