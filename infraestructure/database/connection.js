const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

module.exports = async function() {
	return mongoose.connect(
		MONGO_URI,
		{ useNewUrlParser: true }
	);
};
