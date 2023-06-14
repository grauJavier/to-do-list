import {
  printHTML,
  updateLocalStorage,
  localStorage,
  getData
} from './__mock__/mockingFunctions.js';

const addNewTask = (str) => {
  let taskList = JSON.parse(getData(localStorage.taskListData)) || [];

  const newTask = {
    description: `${str}`,
    completed: false,
    index: taskList.length + 1,
  };

  taskList = taskList.concat(newTask);
  updateLocalStorage(taskList);
  printHTML(newTask.description, newTask.completed, newTask.index);
};

export default addNewTask;
