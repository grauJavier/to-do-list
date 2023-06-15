/**
 * @jest-environment jsdom
 */

import addNewTask from './addNewTask.js'
import printHTML from './printHTML.js';
import clearCompleteTask from './clearCompleteTask.js';
import updateLocalStorage from './updateLocalStorage.js';

jest.mock('./loader.js');
//jest.mock('./updateIndex.js');
jest.mock('./editSwitches.js');
jest.mock('./switchTask.js');

/*
// test function for editing the task description 

describe('TESTING: editSwitches()', () => {

});

// test function for updating an item's 'completed' status

describe('TESTING: ()', () => {

});*/


// test "Clear all completed" function

describe('TESTING: clearCompleteTask()', () => {

  //add three task to the list

  localStorage.clear();
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

  });
  
  test('ERROR: Not deleting completed task properly', () => {
    for (let i = 1; i <= 3; i += 1) {
      addNewTask(`Task N°${i}`);
    }

    let taskList = JSON.parse(localStorage.taskListData);
    taskList.forEach(element => {
    element.completed = true;
    });
    updateLocalStorage(taskList);  
    clearCompleteTask();
    taskList = JSON.parse(localStorage.getItem('taskListData'));
    expect(taskList.length).toBeFalsy();
  });
});

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

  });

  test('ERROR: Not adding HTML elements properly', () => {
    localStorage.clear();

    printHTML("Task N°1", false, 1);
    const taskBox = document.querySelector(`div[index="1"]`);

    expect(document.body.contains(taskBox)).toBe(true);
  });
});
