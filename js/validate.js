// Показать ошибку
function showError(formElements, input, {inputErrorClass, errorClass}) {
  // console.log('false: работает');
  const errorElement = formElements.querySelector(`#${input.id}-${errorClass}`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
};

// Убрать ошибку
function hideError(formElements, input,  {inputErrorClass, errorClass}) {
  // console.log('true: работает')
  const errorElement = formElements.querySelector(`#${input.id}-${errorClass}`);
  errorElement.textContent = '';
  input.classList.remove(inputErrorClass);
};

// ф-ия выполняет проврку валидный или нет
// Если убирем  ошибку/...
function checkInputValidity(formElements, input, {inputErrorClass, errorClass}) {
  // console.log('Чек валидити =>')
  if (input.checkValidity()) {
    // console.log("true")
    hideError(formElements, input, {inputErrorClass, errorClass});
  } else {
    // console.log("false")
    showError(formElements, input, {inputErrorClass, errorClass});
  }
};

// Блокировка не валидной кнопки
function toggleBtnState(formElements, btnElement, {inactiveButtonClass}) {
  if (formElements.checkValidity()) {
    btnElement.classList.remove(inactiveButtonClass);
    btnElement.disabled = false;
  } else {
    btnElement.classList.add(inactiveButtonClass);
    btnElement.disabled = true;
  }
};

function setEventListener(formElements, {inputSelector, submitButtonSelector, ...rest}) {
  const inputElement = Array.from(formElements.querySelectorAll(inputSelector));
  const btnElement = formElements.querySelector(submitButtonSelector);
  // console.log(inputElement);
  // console.log(btnElement);

  inputElement.forEach((input) => {
    toggleBtnState(formElements, btnElement, {...rest});

    input.addEventListener('input', (evt) => {
      // console.log('oN_oN');
      checkInputValidity(formElements, evt.target, {...rest});
      toggleBtnState(formElements, btnElement, {...rest});
    });
  });
};

function enableValidation({formSelector, ...rest}) {
  const formElements = Array.from(document.querySelectorAll(formSelector));
  console.log(formElements);

  formElements.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // console.log('oN');
    });

    setEventListener(form, {...rest});
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-input',
  inactiveButtonClass: 'form__btn-input_state_blocked',
  inputErrorClass: 'form__input_state_invalid',
  errorClass: 'error'
});

