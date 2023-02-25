// Створити скрипт для перемикання теми. Якщо чекбокс у стані чекед – ставити клас на body
// theme-dark ( темна тема ), а якщо чекбокс перевели у "вимкненний" стан - ставити клас theme-light

// Реалузувати збереження обраної теми до локального сховища ( localStorage ).
// При завантаженні сторінки зчитуйте збережену тему ( якщо вона є ) та примініть цю темо до сторінки

const body = document.querySelector('body');
const input = document.querySelector('#slider');

input.addEventListener('click', changeTheme);

if (localStorage.getItem('currentTheme')) {
  if (localStorage.getItem('currentTheme') === 'theme-dark') {
    document.body.className = 'theme-dark';
    input.checked = !input.checked;
  }
}

function changeTheme() {
  const themeValue = input.checked ? 'theme-dark' : 'theme-light';
  document.body.className = themeValue;
  // if (input.checked) {
  //   document.body.className = 'theme-dark';
  // } else {
  //   document.body.className = 'theme-light';
  // }
  localStorage.setItem('currentTheme', themeValue);
}
