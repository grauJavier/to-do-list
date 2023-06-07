import './styles.css';

let taskList = [];

function taskCreator(str) {
  const task = {
    description: `${str}`,
    completed: false,
    index: taskList.length,
  };
  taskList = taskList.concat(task);
}

taskCreator('Task N°1');
taskCreator('Task N°2');
taskCreator('Task N°3');
taskCreator('Task N°4');

localStorage.taskListData = JSON.stringify(taskList);

const taskShelf = document.querySelector('#to-do-list__shelf');

function printHTML(description, status, index) {
  taskShelf.insertAdjacentHTML(
    'beforeend',
    `
    <div class="to-do-list__box" index="${index}" completed="${status}">
      <div class="d-row box__icon-text-wraper">
        <i class="bi bi-square to-do-box__check-box-icon"></i>
        <p class="box__text--incomplete">${description}</p>
      </div>
      <i class="bi bi-three-dots-vertical to-do-box__three-dots-icon"></i>
    </div>
    `,
  );
}

for (let i = 0; i < taskList.length; i += 1) {
  printHTML(taskList[i].description, taskList[i].completed, taskList[i].index);
}
