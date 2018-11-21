const express = require('express');
const {
	ShopController,
	OrderController,
	CheckoutController,
	CartController,
	ProductController
} = require('../controllers');

const { AuthMDW } = require('../middlewares');

class ShopRouter {
	constructor() {
		this.router = express.Router();

		this.router.get('/', ShopController.index);
		this.router.get('/products', ProductController.getProducts);
		this.router.get('/products/:productId', ProductController.getProduct);
		this.router.get('/cart', CartController.getCart);
		this.router.post('/cart', AuthMDW, CartController.createCart);
		this.router.post('/cart-delete-item', AuthMDW, CartController.deleteProduct);
		this.router.get('/orders', AuthMDW, OrderController.getOrders);
		this.router.get('/checkout', AuthMDW, CheckoutController.index);
		this.router.post('/create-order', AuthMDW, OrderController.createOrder);
	}
}

module.exports = new ShopRouter();
