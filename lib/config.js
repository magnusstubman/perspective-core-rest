var validation = require("perspective-core").validation;

module.exports = function(env) {
	var serverConfig =  {
		port: env.SERVER_PORT,
		crossSiteRequest: {
			allowedOrigin: env.SERVER_ALLOWED_ORIGIN
		} 
	};

	var serverConfigValidationRules = {
		port: {
			required: true
		}
	};

	var originConfigValidationRules = {
		allowedOrigin: {
			required: true
		}
	};

	var serverValidationErrors = validation(serverConfig, serverConfigValidationRules);
	var originValidationErrors = validation(serverConfig.crossSiteRequest, originConfigValidationRules);

	if (serverValidationErrors || originValidationErrors) {
		console.error("Missing server config");
		console.error(serverValidationErrors);
		console.error(originValidationErrors);
		process.exit(1);
	}

	return serverConfig;
}