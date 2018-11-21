const express = require('express');
const { AdminController } = require('../controllers');
const { AuthMDW } = require('../middlewares');

class AdminRouter {
	constructor() {
		this.router = express.Router();
		this.router.get('/add-product', AuthMDW, AdminController.getCreateProduct);
		this.router.get('/products', AuthMDW, AdminController.getProducts);
		this.router.post('/add-product', AuthMDW, AdminController.postCreateProduct);
		this.router.get('/edit-product/:productId', AuthMDW, AdminController.getEditProduct);
		this.router.post('/edit-product', AuthMDW, AdminController.postEditProduct);
		this.router.post('/delete-product', AuthMDW, AdminController.deleteProduct);
	}
}

module.exports = new AdminRouter();
