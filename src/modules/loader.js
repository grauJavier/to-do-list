// eslint-disable-next-line import/no-cycle
import printHTML from './printHTML.js';

const loader = () => {
  const listTitle = document.querySelector('#title-box__title');
  const taskList = JSON.parse(localStorage.getItem('taskListData')) || [];
  listTitle.value = JSON.parse(localStorage.getItem('title')) || 'A Nice To-do List Title!';

  if (taskList.length) {
    taskList.forEach((task) => {
      printHTML(task.description, task.completed, task.index);
    });
  }
};

export default loader;
