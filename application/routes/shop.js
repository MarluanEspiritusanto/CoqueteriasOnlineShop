const express = require('express');
const {
	ShopController,
	OrderController,
	CheckoutController,
	CartController,
	ProductController
} = require('../controllers');

class ShopRouter {
	constructor() {
		this.router = express.Router();

		this.router.get('/', ShopController.index);
		this.router.get('/products', ProductController.getProducts);
		this.router.get('/products/:productId', ProductController.getProduct);
		this.router.get('/cart', CartController.getCart);
		this.router.post('/cart', CartController.createCart);
		this.router.post('/cart-delete-item', CartController.deleteProduct);
		this.router.get('/orders', OrderController.getOrders);
		this.router.get('/checkout', CheckoutController.index);
		this.router.post('/create-order', OrderController.createOrder);
	}
}

module.exports = new ShopRouter();
