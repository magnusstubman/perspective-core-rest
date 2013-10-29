var error = require('./lib/error');
var createServer = require('./lib/server');
var produceConfig = require('./lib/config');

module.exports = {
	error: error,
	createServer: createServer,
	produceConfig: produceConfig
};