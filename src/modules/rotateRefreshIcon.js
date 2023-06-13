const rotateRefreshIcon = () => {
  const refreshIcon = document.querySelector('#title-box__refresh-icon');
  let taskList = JSON.parse(localStorage.getItem('taskListData'));
  taskList = taskList.filter((task) => task.completed);

  if (taskList.length) {
    refreshIcon.style.setProperty('transition', 'transform 1s');
    refreshIcon.style.setProperty('transform', 'rotate(-420deg) scaleX(-1)');

    setTimeout(() => {
      refreshIcon.style.setProperty('transition', 'transform 0s');
      setTimeout(() => {
        refreshIcon.style.setProperty('transform', 'rotate(-60deg) scaleX(-1)');
      }, 10);
    }, 1000);
  }
};

export default rotateRefreshIcon;
