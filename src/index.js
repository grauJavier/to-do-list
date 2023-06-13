import './styles.css';
import loader from './modules/loader.js';
import { titleEditOn, titleEditOff } from './modules/editSwitches.js';
import addNewTask from './modules/addNewTask.js';
import clearCompleteTask from './modules/clearCompleteTask.js';
import rotateRefreshIcon from './modules/rotateRefreshIcon.js';

loader();

const listTitle = document.querySelector('#title-box__title');
const addNewSubmit = document.querySelector('#input-box form');
const addNewInput = document.querySelector('#input-box__input');
const clearCompleteTaskButton = document.querySelector('#to-do-list__clear-all p');
const refreshIcon = document.querySelector('#title-box__refresh-icon');

listTitle.addEventListener('focus', () => titleEditOn());
listTitle.addEventListener('blur', () => titleEditOff());
listTitle.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    titleEditOff();
  }
});

addNewSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTask(addNewInput.value);
  addNewSubmit.reset();
});

clearCompleteTaskButton.addEventListener('click', () => {
  rotateRefreshIcon();
  clearCompleteTask();
});

refreshIcon.addEventListener('click', () => {
  rotateRefreshIcon();
  clearCompleteTask();
});
