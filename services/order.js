const { OrderRepository } = require('../infraestructure/repositories');

class OrderService {
	getOrders() {
		const orders = OrderRepository.getOrders();
		return orders;
	}

	getOrder(orderId) {
		const order = OrderRepository.getOrder(orderId);
		return order;
	}

	createOrder(order) {
		return OrderRepository.createOrder(order);
	}

	editOrder(orderId, order) {
		return OrderRepository.editOrder(orderId, order);
	}

	deleteOrder(orderId) {
		return OrderRepository.deleteOrder(orderId);
	}
}

module.exports = new OrderService();
