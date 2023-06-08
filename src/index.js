import './styles.css';
import loader from './modules/loader.js';
import addNewTask from './modules/addNewTask.js';
import clearCompleteTask from './modules/clearCompleteTask.js';

loader();

const titleBox = document.querySelector('#to-do-list__title');
const listTitle = document.querySelector('#title-box__title');
const addNewSubmit = document.querySelector('#input-box form');
const addNewInput = document.querySelector('#input-box__input');
const clearCompleteTaskButton = document.querySelector('#to-do-list__clear-all p');
const refreshIcon = document.querySelector('#title-box__refresh-icon');

listTitle.addEventListener('click', () => {
  titleBox.classList.add('edit');
});

listTitle.addEventListener('blur', () => {
  titleBox.classList.remove('edit');
});

addNewSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTask(addNewInput.value);
  addNewSubmit.reset();
});

clearCompleteTaskButton.addEventListener('click', () => clearCompleteTask());
refreshIcon.addEventListener('click', () => clearCompleteTask());
