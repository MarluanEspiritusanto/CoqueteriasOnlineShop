const { UserRepository } = require('../infraestructure/repositories');

class UserService {
	getUsers() {
		const users = UserRepository.getUsers();
		return users;
	}

	getUser(userId) {
		const user = UserRepository.getUser(userId);
		return user;
	}

	createUser(user) {
		return UserRepository.createUser(user);
	}

	editUser(userId, user) {
		return UserRepository.editUser(userId, user);
	}

	deleteUser(userId) {
		return UserRepository.deleteUser(userId);
	}
}

module.exports = new UserService();
