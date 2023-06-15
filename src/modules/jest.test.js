/**
 * @jest-environment jsdom
 */

import addNewTask from './addNewTask.js';
import deleteTask from './deleteTask.js';
import printHTML from './printHTML.js';

import clearCompleteTask from './clearCompleteTask.js';

jest.mock('./printHTML.js');
jest.mock('./loader.js');
jest.mock('./updateIndex.js');
jest.mock('./editSwitches.js');
jest.mock('./switchTask.js');

// addNewTask()
describe('TESTING: addNewTask()', () => {
  test('ERROR: Input for description is not saved into localStorage', () => {
    const string = 'Task N°2';
    addNewTask(string);
    const taskList = JSON.parse(localStorage.taskListData);
    const taskListTester = taskList[taskList.length - 1].description;
    expect(string).toBe(taskListTester);
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
/*
// test function for editing the task description 

describe('TESTING: editSwitches()', () => {

});

// test function for updating an item's 'completed' status

describe('TESTING: ()', () => {

});


// test "Clear all completed" function

describe('TESTING: clearCompleteTask()', () => {

  //add three task to the list

  localStorage.clear();

    for (let i = 1; i <= 3; i += 1) {
      addNewTask(`Task N°${i}`);
    }

    let taskList = JSON.parse(localStorage.taskListData);
    taskList.forEach(element => {
    element.completed = true;
    });
    console.log(taskList)

  
  test('ERROR: Not deleting completed task properly', () => {
    clearCompleteTask()
    expect(taskList).toBe(false);
  });
});*/

// Mock the HTML elements to test DOM manipulation functions

describe('TESTING: printHTML()', () => {
  beforeEach(() => {
    
    document.body.innerHTML = `
    <main>
    <section id="to-do-list">
      <div id="to-do-list__container" class="d-col">
        <div id="to-do-list__title" class="to-do-list__box">
          <input id="title-box__title" class="box__text--incomplete w-100" value="" required />
          <i id="title-box__counter-icon" class=""></i>
          <i id="title-box__refresh-icon" class="bi bi-arrow-repeat"></i>
        </div>
        <div id="input-box" class="to-do-list__box">
          <form class="d-row w-100">
            <input type="text" id="input-box__input" placeholder="Add to your list..." required />
            <button type="submit" id="input-box__submit-button">
              <i id="input-box__return-icon" class="bi bi-arrow-return-left"></i>
            </button>
          </form>
        </div>
        <div id="to-do-list__shelf"></div>
        <div id="to-do-list__clear-all" class="to-do-list__box">
          <p>Clear all completed</p>
        </div>
      </div>
    </section>
  </main>
    `;
//    jest.clearAllMocks();
  });

  test('ERROR: Not adding HTML elements properly', () => {
    jest.unmock('./printHTML.js');
    localStorage.clear();

    printHTML("Task N°1", false, 1);
    const taskBox = document.querySelector(`div[index="1"]`);
    console.log(document.body.innerHTML);
    expect(document.body.contains(taskBox)).toBe(true);
  });
});