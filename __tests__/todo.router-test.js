const supertest = require('supertest');
const express = require('express');
const router = require('../todo.router');

jest.mock('../todoService');
const todoService = require('../todoService');

const app = express();
router(app);

describe('todo app', () => {
  describe('GET /todo/list', () => {
    let controller;

    beforeEach(() => {
      todoService.list.mockReturnValueOnce(Promise.resolve([
        { id: 1, title: 'Learn React', completed: false }
      ]));
    });

    beforeEach(() => {
      controller = supertest(app).get('/todo/list');
    });

    it('should return list of todos in json format', (done) => {
        controller
        .expect([
          { id: 1, title: 'Learn React', completed: false }
        ])
        .end((err, res) => {
          if (err) done.fail(err);
          done();
        });
    });

    it('should called todoService.list()', (done) => {
        controller
        .end((err, res) => {
          expect(todoService.list).toBeCalled();
          done();
        });
    });
  });
});
