import updateLocalStorage from './updateLocalStorage.js';

const updateIndex = () => {
  const taskList = JSON.parse(localStorage.getItem('taskListData'));

  taskList.forEach((task, index) => {
    task.index = index + 1;
  });

  updateLocalStorage(taskList);

  const taskBoxes = document.querySelectorAll('#to-do-list__shelf .to-do-list__box');

  taskBoxes.forEach((task, index) => {
    task.setAttribute('index', index + 1);
  });
};

export default updateIndex;
