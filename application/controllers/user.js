const { UserService } = require('../../services');

class UserController {
	async getUser(req, res) {
		const { userId } = req.params;
		const user = await UserService.getUser(userId);
		return res.render('shop/user-detail', {
			user: user,
			pageTitle: user.title,
			path: '/users'
		});
	}

	async getUsers(req, res) {
		const users = await UserService.getUsers();
		return res.render('shop/user-list', {
			users: users,
			pageTitle: 'All Users',
			path: '/users'
		});
	}

	getCreateUser(req, res) {
		res.render('admin/edit-user', {
			pageTitle: 'Add user',
			path: '/admin/add-user',
			editing: false
		});
	}

	postCreateUser(req, res) {
		const { title, imageUrl, price, description } = req.body;
		return res.redirect('/');
	}

	async getEditUser(req, res) {
		const { edit } = req.query;
		if (!edit) {
			return res.redirect('/');
		}
		const { userId } = req.params;
		const user = await UserService.getUser(userId);
		return res.render('admin/edit-user', {
			pageTitle: 'Edit user',
			path: '/admin/edit-user',
			editing: edit,
			user
		});
	}

	postEditUser(req, res) {
		const { prodId, updatedTitle, updatedPrice, updatedImageUrl, updatedDesc, updatedUser } = req.body;
		return res.redirect('/admin/users');
	}
}

module.exports = new UserController();
