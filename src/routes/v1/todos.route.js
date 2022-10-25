const router = require('express').Router();
const validate = require('../../middlewares/validate');
const todosValidation = require('../../validations/todos.validation');
const todosController = require('../../controllers/todos.controller');

router.get('/', validate(todosValidation.listTodo), todosController.listTodo);
router.post('/', validate(todosValidation.newTodo), todosController.createTodo);
router.patch('/:id', validate(todosValidation.updateTodo), todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);


module.exports = router;
