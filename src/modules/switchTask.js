import { updateTaskCompleted } from './updateTaskData.js';

const completeTask = (index) => {
  const taskBox = document.querySelector(`div[index="${index}"]`);
  const checkBoxIcon = taskBox.querySelector('.box__icon-text-wraper .bi');
  const taskText = taskBox.querySelector('.box__icon-text-wraper input');

  checkBoxIcon.classList.replace('bi-square', 'bi-check-lg');
  checkBoxIcon.classList.replace(
    'to-do-box__check-box-icon',
    'to-do-box__check-icon',
  );
  taskText.classList.replace('box__text--incomplete', 'box__text--complete');
  taskBox.setAttribute('completed', true);
  updateTaskCompleted(index, true);
};

const incompleteTask = (index) => {
  const taskBox = document.querySelector(`div[index="${index}"]`);
  const checkBoxIcon = taskBox.querySelector('.box__icon-text-wraper .bi');
  const taskText = taskBox.querySelector('.box__icon-text-wraper input');

  checkBoxIcon.classList.replace('bi-check-lg', 'bi-square');
  checkBoxIcon.classList.replace(
    'to-do-box__check-icon',
    'to-do-box__check-box-icon',
  );
  taskText.classList.replace('box__text--complete', 'box__text--incomplete');
  taskBox.setAttribute('completed', false);
  updateTaskCompleted(index, false);
};

const switchTask = (boolean, index) => {
  if (boolean) {
    completeTask(index);
  } else {
    incompleteTask(index);
  }
};
export { completeTask, incompleteTask, switchTask };
