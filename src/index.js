import './styles.css';
import loader from './modules/loader.js';
import addNewTask from './modules/addNewTask.js';
import clearCompleteTask from './modules/clearCompleteTask.js';
import rotateRefreshIcon from './modules/rotateRefreshIcon.js';

loader();

const titleBox = document.querySelector('#to-do-list__title');
const listTitle = document.querySelector('#title-box__title');
const addNewSubmit = document.querySelector('#input-box form');
const addNewInput = document.querySelector('#input-box__input');
const clearCompleteTaskButton = document.querySelector(
  '#to-do-list__clear-all p',
);
const refreshIcon = document.querySelector('#title-box__refresh-icon');

listTitle.addEventListener('click', () => {
  titleBox.classList.add('edit');
});

listTitle.addEventListener('blur', () => {
  titleBox.classList.remove('edit');
  listTitle.blur();

  if (listTitle.value === '') {
    listTitle.value = 'To-do List Title';
  }

  listTitle.setAttribute('value', listTitle.value);
  localStorage.title = JSON.stringify(listTitle.value);
});

listTitle.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    titleBox.classList.remove('edit');
    listTitle.blur();

    if (listTitle.value === '') {
      listTitle.value = 'To-do List Title';
    }

    listTitle.setAttribute('value', listTitle.value);
    localStorage.title = JSON.stringify(listTitle.value);
  }
});

addNewSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTask(addNewInput.value);
  addNewSubmit.reset();
});

clearCompleteTaskButton.addEventListener('click', () => clearCompleteTask());
refreshIcon.addEventListener('click', () => {
  rotateRefreshIcon();
  clearCompleteTask();
});
