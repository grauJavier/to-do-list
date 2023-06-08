// eslint-disable-next-line import/no-cycle
import deleteTask from './deleteTask.js';
import { completeTask, incompleteTask, switchTask } from './switchTask.js';
import { updateTaskDescription } from './updateTaskData.js';

const taskShelf = document.querySelector('#to-do-list__shelf');

const printHTML = (description, status, index) => {
  taskShelf.insertAdjacentHTML(
    'beforeend',
    `
    <div class="to-do-list__box" index="${index}" completed="${status}">
      <div class="d-row box__icon-text-wraper w-100">
        <i class="bi bi-square to-do-box__check-box-icon"></i>
        <input class="box__text--incomplete w-100" value="${description}"></input>
      </div>
      <i class="bi bi-three-dots-vertical box__three-dots-icon"></i>
    </div>
    `,
  );

  switchTask(status, index);

  const taskBox = document.querySelector(`div[index="${index}"]`);
  const checkBoxIcon = taskBox.querySelector('.box__icon-text-wraper .bi');
  const taskText = taskBox.querySelector('.box__icon-text-wraper input');
  const threeDotsIcon = taskBox.querySelector('.box__three-dots-icon');

  checkBoxIcon.addEventListener('click', () => {
    if (taskBox.getAttribute('completed') === 'false') {
      completeTask(index);
    } else if (taskBox.getAttribute('completed') === 'true') {
      incompleteTask(index);
    }
  });

  taskText.addEventListener('click', () => {
    taskBox.classList.add('edit');
    threeDotsIcon.classList.replace('bi-three-dots-vertical', 'bi-trash3');
    taskBox.querySelector('.bi-trash3').addEventListener('click', () => {
      deleteTask(index);
    });
  });

  taskText.addEventListener('blur', () => {
    taskBox.classList.remove('edit');
    threeDotsIcon.classList.replace('bi-trash3', 'bi-three-dots-vertical');
    taskText.blur();
    taskText.setAttribute('value', taskText.value);
    updateTaskDescription(index, taskText.value);
  });

  taskText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      taskBox.classList.remove('edit');
      threeDotsIcon.classList.replace('bi-trash3', 'bi-three-dots-vertical');
      taskText.blur();
      taskText.setAttribute('value', taskText.value);
      updateTaskDescription(index, taskText.value);
    }
  });
};

export default printHTML;
