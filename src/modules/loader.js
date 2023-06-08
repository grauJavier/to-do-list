// eslint-disable-next-line import/no-cycle
import printHTML from './printHTML.js';

const loader = () => {
  const listTitle = document.querySelector('#title-box__title');
  const taskList = JSON.parse(localStorage.getItem('taskListData')) || [];
  listTitle.value = JSON.parse(localStorage.getItem('title')) || 'A Nice To-do List Title!';

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
