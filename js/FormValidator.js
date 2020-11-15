export class FormValidator {
  constructor(formSelector, inputSelector, submitButtonSelector,inactiveButtonClass,
    inputErrorClass, errorClass) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

// Показать ошибку
  _showError(formElements, input) {
  // console.log('false: работает');
  const errorElement = formElements.querySelector(`#${input.id}-${this._errorClass}`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(this._inputErrorClass);
  };

// Убрать ошибку
  _hideError(formElements, input) {
  // console.log('true: работает')
  const errorElement = formElements.querySelector(`#${input.id}-${this._errorClass}`);
  errorElement.textContent = '';
  input.classList.remove(this._inputErrorClass);
  };

  // ф-ия выполняет проврку валидный или нет
// Если убирем  ошибку/...
  _checkInputValidity(formElements, input) {
    //console.log('Чек валидити =>')
    if (input.checkValidity()) {
      //console.log("true")
      this._hideError(formElements, input, this._inputErrorClass, this._errorClass);
    } else {
      //console.log("false")
      this._showError(formElements, input, this._inputErrorClass, this._errorClass);
    }
  };

  // Блокировка не валидной кнопки
  _toggleBtnState(formElements, btnElement) {
    if (formElements.checkValidity()) {
      btnElement.classList.remove(this._inactiveButtonClass);
      btnElement.disabled = false;
    } else {
      btnElement.classList.add(this._inactiveButtonClass);
      btnElement.disabled = true;
    }
  };

  _setEventListener(formElements) {
    const inputElement = Array.from(formElements.querySelectorAll(this._inputSelector));
    const btnElement = formElements.querySelector(this._submitButtonSelector);
    //console.log(inputElement);
    //console.log(btnElement);

    inputElement.forEach((input) => {
      this._toggleBtnState(formElements, btnElement);

      input.addEventListener('input', (evt) => {
        // console.log('oN_oN');
        this._checkInputValidity(formElements, evt.target);
        this._toggleBtnState(formElements, btnElement);
      });
    });
  };

  enableValidation() {
    //Получаем массив форм
    const formElements = Array.from(document.querySelectorAll(this._formSelector));
    //console.log(formElements); //тест пройден +

  //Перебираем массив
    formElements.forEach((form) => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        //console.log('oN'); //тест не пройден -
      });

      // console.log(form);
      this._setEventListener(form);
    });
  };
};
