// eslint-disable-next-line import/no-cycle
import deleteTask from './deleteTask.js';
import { updateTaskDescription } from './updateTaskData.js';

const titleEditOn = () => {
  const titleBox = document.querySelector('#to-do-list__title');
  titleBox.classList.add('edit');
};

const titleEditOff = () => {
  const titleBox = document.querySelector('#to-do-list__title');
  const listTitle = document.querySelector('#title-box__title');
  titleBox.classList.remove('edit');
  listTitle.blur();

  if (!listTitle.value) {
    listTitle.value = 'A Nice To-do List Title!';
  }

  listTitle.setAttribute('value', listTitle.value);
  localStorage.title = JSON.stringify(listTitle.value);
};

const taskEditOn = (index) => {
  const taskBox = document.querySelector(`div[index="${index}"]`);
  const threeDotsIcon = taskBox.querySelector('.box__three-dots-icon');

  taskBox.classList.add('edit');
  threeDotsIcon.classList.replace('bi-three-dots-vertical', 'bi-trash3');
  taskBox
    .querySelector('.bi-trash3')
    .addEventListener('click', () => deleteTask(index));
};

const taskEditOff = (index) => {
  const taskBox = document.querySelector(`div[index="${index}"]`);
  const taskText = taskBox.querySelector('.box__icon-text-wraper input');
  const threeDotsIcon = taskBox.querySelector('.box__three-dots-icon');

  taskBox.classList.remove('edit');
  threeDotsIcon.classList.replace('bi-trash3', 'bi-three-dots-vertical');
  taskText.blur();

  if (!taskText.value) {
    taskText.value = `Task N°${index}`;
  }

  taskText.setAttribute('value', taskText.value);
  updateTaskDescription(index, taskText.value);
};

export {
  titleEditOn, titleEditOff, taskEditOn, taskEditOff,
};
