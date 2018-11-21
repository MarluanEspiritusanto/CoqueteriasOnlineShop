const express = require('express');
const { AuthController } = require('../controllers');

class AuthRouter {
	constructor() {
		this.router = express.Router();

		this.router.get('/login', AuthController.getLogin);
		this.router.post('/login', AuthController.postLogin);
		this.router.post('/logout', AuthController.logout);
		this.router.get('/signup', AuthController.getSignUp);
		this.router.post('/signup', AuthController.postSignUp);
	}
}

module.exports = new AuthRouter();
