import addNewTask from './addNewTask.js';
import { localStorage } from './__mock__/mockingFunctions.js';

describe('testing addNewTask()', () => {
  test('ERROR: Description not saved into localStorage', () => {
    let string = 'task number 1';
    addNewTask(string);
    let taskList = JSON.parse(localStorage.taskListData) || [];
    let taskListTester = taskList[taskList.length - 1].description;
    expect(string === taskListTester).toBe(true);
  });

//   test('ERROR', () => {});
//   test('ERROR', () => {});
});
