const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');


const createTodo = catchAsync(async (req, res) => {
  const { title } = req.body;
  const { Todo } = req.$models;

  const todo = await Todo.create({ title, userId: 2 });

  res.status(httpStatus.CREATED).json({ todo });
});



const updateTodo = catchAsync(async (req, res) => {
  const { completed } = req.body;
  const { Todo } = req.$models;

  const todo = await Todo.findByPk(req.params.id);

  if (todo === null) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Not Found' });
  }

  todo.completed = completed;

  await todo.save();

  res.status(httpStatus.OK).json({ todo });
});



const deleteTodo = catchAsync(async (req, res) => {
  const { Todo } = req.$models;
  const todo = await Todo.findByPk(req.params.id);

  if (todo === null) {
    return res.status(httpStatus.NOT_FOUND).json({ message: 'Not Found' });
  }

  await todo.destroy();

  res.status(httpStatus.NO_CONTENT).end();
});



const listTodo = catchAsync(async (req, res) => {
  const { completed } = req.query;
  const { Todo } = req.$models;
  const query = {
    attributes: ['id', 'title', 'completed'],
    order: [
      ['id', 'DESC']
    ]
  };

  if (typeof completed !== 'undefined') {
    query.where = { completed };
  }

  const todos = await Todo.findAll(query);

  res.status(httpStatus.OK).json({ todos });
});



module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
  listTodo,
}
