const Joi = require('joi');

const newTodo = {
  body: Joi.object().keys({
    title: Joi.string().required(),
  }),
};


const updateTodo = {
  body: Joi.object().keys({
    completed: Joi.bool().required(),
  }),
};

const listTodo = {
  query: Joi.object().keys({
    completed: Joi.bool(),
  }),
};

module.exports = {
  newTodo,
  updateTodo,
  listTodo,
};
