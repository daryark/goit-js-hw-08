const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
let userDataObj = {};

function getDataFromLocalStorage() {
  try {
    const localStorageData = JSON.parse(localStorage.getItem(LS_KEY));

    if (localStorageData === null) {
      return;
    }

    Object.keys(localStorageData).map(el => {
      formEl.elements[el].value = localStorageData[el];
    });
  } catch (err) {
    console.error(err);
  }
}
getDataFromLocalStorage();

function onChange(e) {
  localStorage.setItem(LS_KEY, JSON.stringify(userDataObj));

  userDataObj = JSON.parse(localStorage.getItem(LS_KEY));
  userDataObj[e.target.name] = e.target.value;

  console.log(JSON.parse(localStorage.getItem(LS_KEY)));
}

function clearForm() {
  localStorage.clear();
}

formEl.addEventListener('input', throttle(onChange, 500));
formEl.addEventListener('submit', clearForm);
