import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormData, 500));

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  evt.preventDefault();
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
