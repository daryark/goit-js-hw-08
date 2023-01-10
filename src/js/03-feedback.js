const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const userDataObj = {};

function getDataFromLocalStorage() {
  try {
    const localStorageData = JSON.parse(localStorage.getItem('userDataObj'));

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
  userDataObj[e.target.name] = e.target.value;
  localStorage.setItem('userDataObj', JSON.stringify(userDataObj));
}

formEl.addEventListener('input', throttle(onChange, 500));
