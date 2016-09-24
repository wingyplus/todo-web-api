const Todo = require('./Todo');

module.exports = {
  list: () => {
    return Todo.findAll();
  }
};
