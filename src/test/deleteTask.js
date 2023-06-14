import {
  loader,
  updateLocalStorage,
  updateIndex,
  localStorage,
} from './__mock__/mockingFunctions.js';

const deleteTask = (taskIndex) => {
  const taskShelf = document.querySelector('#to-do-list__shelf');
  let taskList = JSON.parse(localStorage.getItem('taskListData'));

  taskList = taskList.filter((task) => task.index !== taskIndex);

  updateLocalStorage(taskList);
  updateIndex();

  // Reload
  taskShelf
    .querySelectorAll('.to-do-list__box')
    .forEach((task) => task.remove());
  loader();
};

export default deleteTask;
