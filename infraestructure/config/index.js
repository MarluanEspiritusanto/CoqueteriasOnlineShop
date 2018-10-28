const configDev = require('./dev.config')();
const configProd = require('./prod.config')();
const { NODE_ENV } = process.env;

module.exports = NODE_ENV === 'production' ? configProd : configDev;
