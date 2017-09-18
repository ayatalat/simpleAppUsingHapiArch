'use strict';

const Joi = require('joi');

module.exports = {
  payload:Joi.object().keys({
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required()
  })
};