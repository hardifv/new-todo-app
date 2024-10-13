const request = require('supertest');
const { app, server } = require('../index');  // Adjust path to point to index.js

describe('To-Do App', () => {
  afterAll(() => {
    server.close();  // Close the server after tests
  });

  test('adds a task', async () => {
    const response = await request(app)
      .post('/add-task')
      .send({ task: 'Test Task' });

    expect(response.text).toBe('Task Test Task added');
  });
});
