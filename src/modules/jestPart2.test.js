/**
 * @jest-environment jsdom
 */

import addNewTask from './addNewTask.js';
import printHTML from './printHTML.js';
import clearCompleteTask from './clearCompleteTask.js';
import updateLocalStorage from './updateLocalStorage.js';
import { updateTaskDescription } from './updateTaskData.js';

jest.mock('./loader.js');
jest.mock('./editSwitches.js');
jest.mock('./switchTask.js');
// test function for editing the task description

const initDocument = () => {
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
  return document.body.innerHTML;
};

describe('TESTING: editSwitches()', () => {
  beforeEach(() => {
    initDocument();
  });

  test('ERROR: Edit description of task is not working properly', () => {
    localStorage.clear();
    // Add three tasks to the localStorage
    for (let i = 1; i <= 3; i += 1) {
      addNewTask(`Task N°${i}`);
    }

    // Selecting all user input
    const taskShelf = document.querySelector('#to-do-list__shelf');
    const taskText = taskShelf.querySelectorAll('input');

    // MANUAL MOCKING of taskEditOff() x3 times
    for (let i = 0; i < taskText.length; i += 1) {
      taskText[i].value = 'Mocking test';
      taskText[i].setAttribute('value', taskText[i].value);
      updateTaskDescription([i + 1], taskText[i].value);
    }

    // Loading localStorage data for comparison
    const taskList = JSON.parse(localStorage.getItem('taskListData'));

    // Compare input against localStorage data x3 times
    for (let i = 0; i < taskList.length; i += 1) {
      expect(taskText[i].value).toBe(taskList[0].description);
    }
  });
});

// Update an item's 'completed' status
// && Test for "Clear all completed" functions
describe('TESTING: clearCompleteTask()', () => {
  beforeEach(() => {
    initDocument();
  });

  test('ERROR: Not deleting completed task properly', () => {
    localStorage.clear();
    // Add three task to the localStorage
    for (let i = 1; i <= 3; i += 1) {
      addNewTask(`Task N°${i}`);
    }

    // Updating task completed property to 'true'
    let taskList = JSON.parse(localStorage.taskListData);
    taskList.forEach((element) => {
      element.completed = true;
    });

    updateLocalStorage(taskList);
    clearCompleteTask();

    // Reload data from localStorage
    taskList = JSON.parse(localStorage.getItem('taskListData'));
    expect(taskList.length).toBeFalsy();
  });
});

// Mock the HTML elements to test DOM manipulation functions
describe('TESTING: printHTML()', () => {
  beforeEach(() => {
    initDocument();
  });

  test('ERROR: Not adding HTML elements properly', () => {
    localStorage.clear();

    printHTML('Task N°1', false, 1);
    const taskBox = document.querySelector('div[index="1"]');

    expect(document.body.contains(taskBox)).toBe(true);
  });
});
