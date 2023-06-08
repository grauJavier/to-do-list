const updateLocalStorage = (taskList) => {
  localStorage.taskListData = JSON.stringify(taskList);
};

export default updateLocalStorage;