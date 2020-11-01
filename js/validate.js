// // включение валидации вызовом enableValidation
// // все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

// const formC = document.querySelector('.form')
// const formInput = formC.querySelector('.form__input'); //54 строчка конст
// // console.log(formInput);

// Показать ошибку
function showError(formElements, input) {
  console.log('false: работает');
  const errorElement = formElements.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add('form__input_state_invalid');
};

// Убрать ошибку
function hideError(formElements, input) {
  console.log('true: работает')
  const errorElement = formElements.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  input.classList.remove('form__input_state_invalid');
};

// ф-ия выполняет проврку валидный или нет
// Если убирем  ошибку/...
function checkInputValidity(formElements, input) {
  console.log('Чек валидити =>')
  if (input.checkValidity()) {
    console.log("true")
    hideError(formElements, input);
  } else {
    console.log("false")
    showError(formElements, input);
  }
};

// Блокировка не валидной кнопки
function toggleBtnState(formElements, btnElement) {
  if (formElements.checkValidity()) {
    btnElement.classList.remove('form__btn-input_state_blocked');
    btnElement.disabled = false;
  } else {
    btnElement.classList.add('form__btn-input_state_blocked');
    btnElement.disabled = true;
  }
};

function setEventListener(formElements) {
  const inputElement = Array.from(formElements.querySelectorAll('.form__input'));
  const btnElement = formElements.querySelector('.form__btn-input');
  console.log(inputElement);
  console.log(btnElement);

  inputElement.forEach((input) => {
    toggleBtnState(formElements, btnElement);
    input.addEventListener('input', (evt) => {
      // console.log('oN_oN');
      checkInputValidity(formElements, evt.target);
      toggleBtnState(formElements, btnElement);
    });
  });
};

function enableValidation() {
  const formElements = Array.from(document.querySelectorAll('.form'));
  console.log(formElements);

  formElements.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // console.log('oN');
    });

    setEventListener(form);
  });
};

enableValidation();

