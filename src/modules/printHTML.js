// eslint-disable-next-line import/no-cycle
import { taskEditOn, taskEditOff } from './editSwitches.js';
import { switchTask } from './switchTask.js';



const printHTML = (description, status, index) => {
  const taskShelf = document.querySelector('#to-do-list__shelf');
 
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

  const taskBox = document.querySelector(`div[index="${index}"]`);
  const checkBoxIcon = taskBox.querySelector('.box__icon-text-wraper .bi');
  const taskText = taskBox.querySelector('.box__icon-text-wraper input');

  checkBoxIcon.addEventListener('click', () => {
    const boolean = !JSON.parse(taskBox.getAttribute('completed'));
    switchTask(boolean, index);
  });

  taskText.addEventListener('focus', () => taskEditOn(index));
  taskText.addEventListener('blur', () => taskEditOff(index));
  taskText.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      taskEditOff(index);
    }
  });
};

export default printHTML;
