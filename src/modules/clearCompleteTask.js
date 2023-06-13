import updateLocalStorage from './updateLocalStorage.js';
import updateIndex from './updateIndex.js';
import loader from './loader.js';
import completedCounter from './completedCounter.js';

const clearCompleteTask = () => {
  const taskShelf = document.querySelector('#to-do-list__shelf');
  let taskList = JSON.parse(localStorage.getItem('taskListData'));
  taskList = taskList.filter((task) => task.completed);

  if (taskList.length) {
    taskList = JSON.parse(localStorage.getItem('taskListData'));
    taskList = taskList.filter((task) => !task.completed);

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
