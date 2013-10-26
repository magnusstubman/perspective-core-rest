var util = require('util');
var AbstractError = require('perspective-core-server').error.AbstractError;
var NotFoundErrorCore = require('perspective-core-server').error.NotFoundError;
var ValidationErrorCore = require('perspective-core-server').error.ValidationError;

var NotFoundError = function (msg) {
  this.statusCode = 404;
  NotFoundError.super_.call(this, msg, this.constructor);
};

util.inherits(NotFoundError, NotFoundErrorCore);

var GeneralError = function() {
  this.statusCode = 500;
  GeneralError.super_.call(this, 'Something went wrong, could not fulfil the request', this.constructor);
};

util.inherits(GeneralError, AbstractError);
GeneralError.prototype.name = 'GeneralError';

var ValidationError = function(body) {
  this.statusCode = 400;
  ValidationError.super_.call(this, body, this.constructor);
};

util.inherits(ValidationError, ValidationErrorCore);

module.exports = {
  GeneralError: GeneralError,
  NotFoundError: NotFoundError,
  ValidationError: ValidationError,
  factory: function(error) {
    if (error instanceof ValidationErrorCore) {
      return new resource.NotFoundError(error.message);
    } else if (error instanceof ValidationErrorCore) {
      return new resource.ValidationError(error.message);
    }

    return new resource.GeneralError();
  }
};

 