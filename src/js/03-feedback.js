import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formFields = {
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

const formData = {};
if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  const localStorageParseData = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEY)
  );
  for (key of Object.keys(localStorageParseData)) {
    formData[key] = localStorageParseData[key];
    formFields[key].value = localStorageParseData[key];
  }
}

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
  delete formData.email;
  delete formData.message;
}
