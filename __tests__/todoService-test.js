const Todo = require('../Todo');
const todoService = require('../todoService');

describe('todoService', () => {
  describe('list', () => {
    beforeEach((done) => {
      Todo.sync({ force: true }).then(done);
    })

    it('get all todos from db', (done) => {
      Todo.create({
        title: 'Learn React',
        completed: false,
      })
      .then(() => {
        return todoService.list();
      })
      .then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].id).toBe(1);
        expect(todos[0].title).toBe('Learn React');
        expect(todos[0].completed).toBe(false);
        done();
      });;
    });
  });
});
