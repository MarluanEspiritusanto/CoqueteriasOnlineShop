const express = require('express');
const { AdminController } = require('../controllers');

class AdminRouter {
	constructor() {
		this.router = express.Router();
		this.router.get('/add-product', AdminController.getCreateProduct);
		this.router.get('/products', AdminController.getProducts);
		this.router.post('/add-product', AdminController.postCreateProduct);
		this.router.get('/edit-product/:productId', AdminController.getEditProduct);
		this.router.post('/edit-product', AdminController.postEditProduct);
		this.router.post('/delete-product', AdminController.deleteProduct);
	}
}

module.exports = new AdminRouter();
