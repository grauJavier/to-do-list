const completedCounter = () => {
  const counterIcon = document.querySelector('#title-box__counter-icon');
  let taskList = JSON.parse(localStorage.getItem('taskListData'));
  taskList = taskList.filter((task) => task.completed === true);

  counterIcon.classList = '';

  if (taskList.length === 0) {
    counterIcon.classList = '';
  } else if (taskList.length >= 10) {
    counterIcon.classList = 'bi bi-exclamation-circle-fill';
  } else {
    counterIcon.classList = `bi bi-${taskList.length}-circle-fill`;
  }
};

export default completedCounter;
