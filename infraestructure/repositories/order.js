const { OrderModel } = require('../../domain/entities');

class OrderRepository {
	getOrders() {
		const orders = OrderModel.find().populate('userId');
		return orders;
	}

	getOrder(orderId) {
		const order = OrderModel.findById(orderId);
		return order;
	}

	createOrder(order) {
		return orderModel.create(order);
	}

	editOrder(orderId, order) {
		return OrderModel.findByIdAndUpdate(orderId, order);
	}

	deleteOrder(orderId) {
		return OrderModel.findByIdAndRemove(orderId);
	}
}

module.exports = new OrderRepository();
