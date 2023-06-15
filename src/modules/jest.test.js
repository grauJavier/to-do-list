/**
 * @jest-environment jsdom
 */

import addNewTask from './addNewTask.js';
import deleteTask from './deleteTask.js';

jest.mock('./printHTML.js');
jest.mock('./loader.js');
jest.mock('./updateIndex.js');

// addNewTask()
describe('TESTING: addNewTask()', () => {
  test('ERROR: Input for description is not saved into localStorage', () => {
    const string = 'Task N°1';
    addNewTask(string);
    const taskList = JSON.parse(localStorage.taskListData);
    const taskListTester = taskList[taskList.length - 1].description;
    expect(string === taskListTester).toBe(true);
  });

  test('ERROR: Completed status is not set as false', () => {
    const string = 'Task N°2';
    addNewTask(string);
    const taskList = JSON.parse(localStorage.taskListData);
    const taskListTester = taskList[taskList.length - 1].completed;
    expect(taskListTester).toBe(false);
  });

  test('ERROR: Index match is not correct', () => {
    const string = 'Task N°3';
    addNewTask(string);
    const taskList = JSON.parse(localStorage.taskListData);
    const taskListTester = taskList[taskList.length - 1].index;
    expect(taskListTester).toBe(taskList.length);
  });
});

// deleteTask()
describe('TESTING: deleteTask()', () => {
  test('ERROR: Last object not removed from localStorage', () => {
    localStorage.clear();

    for (let i = 1; i <= 3; i += 1) {
      addNewTask(`Task N°${i}`);
    }

    deleteTask(3, true);

    const taskList = JSON.parse(localStorage.taskListData);
    const taskListTester = taskList.includes(taskList[2]);
    expect(taskListTester).toBe(false);
  });

  test('ERROR: Object in the middle not removed from localStorage', () => {
    localStorage.clear();

    for (let i = 1; i <= 3; i += 1) {
      addNewTask(`Task N°${i}`);
    }

    let taskList = JSON.parse(localStorage.taskListData);
    const taskListTester = taskList[1];

    deleteTask(2, true);

    taskList = JSON.parse(localStorage.taskListData);

    expect(taskList.includes(taskListTester)).toBe(false);
  });

  test('ERROR: First object not removed from localStorage', () => {
    localStorage.clear();

    for (let i = 1; i <= 3; i += 1) {
      addNewTask(`Task N°${i}`);
    }

    let taskList = JSON.parse(localStorage.taskListData);
    const taskListTester = taskList[0];

    deleteTask(1, true);

    taskList = JSON.parse(localStorage.taskListData);

    expect(taskList.includes(taskListTester)).toBe(false);
  });
});
