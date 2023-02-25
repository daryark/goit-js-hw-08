import voca from 'voca';

const controls = document.querySelector('.controls');
controls.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.target.nodeName === 'BUTTON') {
    // e.target.className;
  }
}

// console.log(controls.firstElementChild.firstElementChild.dataset.case);
