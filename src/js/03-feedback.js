const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';
const { email, message } = formEl.elements;

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

function onChange() {
  const inputData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(LS_KEY, JSON.stringify(inputData));
}

function clearForm(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LS_KEY)));
  localStorage.clear();

  formEl.reset();
}

formEl.addEventListener('input', throttle(onChange, 500));
formEl.addEventListener('submit', clearForm);
