// eslint-disable-next-line import/no-cycle
import loader from './loader.js';
import updateLocalStorage from './updateLocalStorage.js';
import updateIndex from './updateIndex.js';

const deleteTask = (taskIndex, testmode = false) => {
  const taskShelf = document.querySelector('#to-do-list__shelf');
  let taskList = JSON.parse(localStorage.getItem('taskListData'));

  taskList = taskList.filter((task) => task.index !== taskIndex);
  updateLocalStorage(taskList);

  if (!testmode) {
    updateIndex();

    taskShelf
      .querySelectorAll('.to-do-list__box')
      .forEach((task) => task.remove());

    loader();
  }
};

export default deleteTask;
