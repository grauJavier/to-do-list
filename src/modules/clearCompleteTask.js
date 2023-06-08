import updateLocalStorage from './updateLocalStorage.js';
import updateIndex from './updateIndex.js';
import loader from './loader.js';
import completedCounter from './completedCounter.js';

const clearCompleteTask = () => {
  const taskShelf = document.querySelector('#to-do-list__shelf');
  let taskList = JSON.parse(localStorage.getItem('taskListData'));
  taskList = taskList.filter((task) => task.completed === true);

  if (taskList.length !== 0) {
    taskList = JSON.parse(localStorage.getItem('taskListData'));
    taskList = taskList.filter((task) => task.completed !== true);

    updateLocalStorage(taskList);
    updateIndex();

    // Reload
    taskShelf
      .querySelectorAll('.to-do-list__box')
      .forEach((task) => task.remove());
    loader();
    completedCounter();
  }
};

export default clearCompleteTask;
