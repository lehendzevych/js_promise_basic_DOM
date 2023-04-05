'use strict';

const promise1 = new Promise((resolve) => {
  document
    .querySelector('.logo')
    .addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(onSuccess, onError);
promise2.then(onSuccess, onError);

function onSuccess() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
}

function onError() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `);
}
