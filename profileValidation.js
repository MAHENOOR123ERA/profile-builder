const Joi = require('joi');

const profileSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(10).max(100).required(),
  bio: Joi.string().max(300).optional()
});

const updateProfileSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  age: Joi.number().integer().min(10).max(100),
  bio: Joi.string().max(300)
});

module.exports = {
  profileSchema,
  updateProfileSchema
};
