import updateLocalStorage from './updateLocalStorage.js';
import completedCounter from './completedCounter.js';

const updateTaskDescription = (index, value) => {
  const taskList = JSON.parse(localStorage.getItem('taskListData'));
  taskList[index - 1].description = value;
  updateLocalStorage(taskList);
};

const updateTaskCompleted = (index, boolean) => {
  const taskList = JSON.parse(localStorage.getItem('taskListData'));
  taskList[index - 1].completed = boolean;
  updateLocalStorage(taskList);
  completedCounter();
};

export { updateTaskDescription, updateTaskCompleted };
