const addTask = require('../index');

test('adds a task', () => {
  expect(addTask('Test Task')).toBe('Task Test Task added');
});
