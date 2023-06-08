import printHTML from './printHTML.js';
import updateLocalStorage from './updateLocalStorage.js';

const addNewTask = (str) => {
  let taskList = JSON.parse(localStorage.getItem('taskListData')) || [];

  const newTask = {
    description: `${str}`,
    completed: false,
    index: (taskList.length + 1),
  };

  taskList = taskList.concat(newTask);
  updateLocalStorage(taskList);
  printHTML(newTask.description, newTask.completed, newTask.index);
};

export default addNewTask;