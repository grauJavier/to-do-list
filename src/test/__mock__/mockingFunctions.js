var localStorage = {};

const loader = () => {};
const printHTML = () => {};
const updateIndex = () => {};

const updateLocalStorage = (taskList) => {
  localStorage.taskListData = JSON.stringify(taskList);
};

const getData = (source) => {
    return source;
};

export { loader, printHTML, updateLocalStorage, updateIndex, localStorage, getData };
