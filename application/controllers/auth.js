const { UserModel } = require('../../domain/entities');
const { UserService } = require('../../services');
const bcrypt = require('bcryptjs');

class AuthController {
	getLogin(req, res) {
		console.log(req.session.isLoggedIn);
		return res.render('auth/login', {
			path: '/login',
			pageTitle: 'Login',
			isAuthenticated: req.session.isLoggedIn
		});
	}

	async postLogin(req, res) {
		const { email, password } = req.body;
		const user = await UserService.getUserByEmail(email);
		if (!user) {
			return res.redirect('/login');
		}

		const isValidPassword = await bcrypt.compare(password, user.password);
		if (!isValidPassword) {
			return res.redirect('/login');
		}
		req.session.isLoggedIn = true;
		req.session.user = user;
		req.session.save(() => {
			return res.redirect('/');
		});
	}

	logout(req, res) {
		req.session.destroy(() => {
			return res.redirect('/');
		});
	}

	getSignUp(req, res) {
		return res.render('auth/singup', {
			path: '/singup',
			pageTitle: 'Sing Up',
			isAuthenticated: false
		});
	}

	async postSignUp(req, res) {
		console.log('wawawa');
		let { email, password, confirmPassword } = req.body;
		password = await bcrypt.hash(password, 12);
		const user = await UserService.getUserByEmail(email);
		console.log(user);
		if (user) {
			return res.redirect('/signup');
		}

		await UserService.createUser({ email, password });
		return res.redirect('/login');
	}
}

module.exports = new AuthController();
