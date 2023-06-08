// eslint-disable-next-line import/no-cycle
import printHTML from './printHTML.js';

const loader = () => {
  const taskList = JSON.parse(localStorage.getItem('taskListData')) || [];

  if (taskList.length !== 0) {
    for (let i = 0; i < taskList.length; i += 1) {
      printHTML(
        taskList[i].description,
        taskList[i].completed,
        taskList[i].index,
      );
    }
  }
};

export default loader;
