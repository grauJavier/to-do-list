import printHTML from './printHTML.js';

const loader = () => {
  const taskList = JSON.parse(localStorage.getItem('taskListData')) || [];

  if (taskList.length !== 0) {
    for (const i in taskList) {
      printHTML(
        taskList[i].description,
        taskList[i].completed,
        taskList[i].index,
      );
    }
  }
};

export default loader;
