import updateLocalStorage from './updateLocalStorage.js';

const updateIndex = () => {
  const taskList = JSON.parse(localStorage.getItem('taskListData'));

  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].index = i + 1;
  }

  updateLocalStorage(taskList);

  const taskBoxes = document.querySelectorAll('#to-do-list__shelf .to-do-list__box');

  taskBoxes.forEach((task, index) => {
    task.setAttribute('index', index + 1);
  });
};

export default updateIndex;
