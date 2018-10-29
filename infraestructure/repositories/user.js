const { UserModel } = require('../../domain/entities');

class UserRepository {
	getUsers() {
		const users = UserModel.find();
		return users;
	}

	getUser(userId) {
		const user = UserModel.findById(userId);
		return user;
	}

	createUser(user) {
		return UserModel.create(user);
	}

	editUser(userId, user) {
		return UserModel.findByIdAndUpdate(userId, user);
	}

	deleteUser(userId) {
		return UserModel.findByIdAndRemove(userId);
	}
}

module.exports = new UserRepository();
