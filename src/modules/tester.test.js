import addNewTask from './addNewTask.js';

describe( 'testing addNewTask()', () => {

  test('ERROR: description not saved into localStorage',() => {
    let string = 'task number 1';
    let taskList = JSON.parse(localStorage.getItem('taskListData')) || [];
    addNewTask(string);    
    let taskListTester = taskList[taskList.length-1].description;
    expect(string === taskListTester).toBe(true);
  })
  test('ERROR',() => {

  })
  test('ERROR',() => {

  })

});