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

const formInput = formCard.querySelector('.form__input'); //54 строчка конст

//Блокировка не валидной кнопки
function toggleBtnState(btnElement) {
  if (formCard.checkValidity()) {
    btnElement.classList.remove('form__btn-input_state_blocked');
    btnElement.disabled = false;
  } else {
    btnElement.classList.add('form__btn-input_state_blocked');
    btnElement.disabled = true;
  }
};

//Поиск всех инаутов формы
function setEventListener() {
  const inputElement = Array.from(formCard.querySelectorAll('.form__input'));
  const btnElement = formCard.querySelector('.form__btn-create');

  inputElement.forEach((input) => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(evt.target);
      toggleBtnState(btnElement);
    });
  });

  toggleBtnState(btnElement);
};

// Показать ошибку
function showError(input) {
  const errorElement = formCard.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add('form__input_state_invalid');
};

// Убрать ошибку
function hideError(input) {
  const errorElement = formCard.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  input.classList.remove('form__input_state_invalid');
};

// ф-ия выполняет проврку валидный или нет
// Если убирем  ошибку/...
function checkInputValidity(input) {
  if (input.checkValidity()) {
    hideError(input);
  } else {
    showError(input);
  }
};

//Обработчик полей INPUT
inputName.addEventListener('input', (evt) => {
  checkInputValidity(evt.target);
});

//Вызван обработчик формы submit
formCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

setEventListener();
