export class FormValidator {
  constructor(formSelector, config) {
    this._formSelector = formSelector;

    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  // Показать ошибку
  _showError(formElement, input) {
    // console.log('false: работает');
    const errorElement = formElement.querySelector(`#${input.id}-${this._errorClass}`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  };

  // Убрать ошибку
  _hideError(formElement, input) {
    // console.log('true: работает')
    const errorElement = formElement.querySelector(`#${input.id}-${this._errorClass}`);
    errorElement.textContent = '';
    input.classList.remove(this._inputErrorClass);
  };

  // ф-ия выполняет проврку валидный или нет
// Если убирем  ошибку/...
  _checkInputValidity(formElement, input) {
    //console.log('Чек валидити =>')
    if (input.checkValidity()) {
      //console.log("true")
      this._hideError(formElement, input, this._inputErrorClass, this._errorClass);
    } else {
      //console.log("false")
      this._showError(formElement, input, this._inputErrorClass, this._errorClass);
    }
  };

  // Блокировка не валидной кнопки
  _toggleBtnState(formElement, btnElement) {
    if (formElement.checkValidity()) {
      btnElement.classList.remove(this._inactiveButtonClass);
      btnElement.disabled = false;
    } else {
      btnElement.classList.add(this._inactiveButtonClass);
      btnElement.disabled = true;
    }
  };

  _setEventListener(formElement) {
    const inputElement = Array.from(formElement.querySelectorAll(this._inputSelector));
    const btnElement = formElement.querySelector(this._submitButtonSelector);
    //console.log(inputElement);
    //console.log(btnElement);

    inputElement.forEach((input) => {
      this._toggleBtnState(formElement, btnElement);

      input.addEventListener('input', (evt) => {
        // console.log('oN_oN');
        this._checkInputValidity(formElement, evt.target);
        this._toggleBtnState(formElement, btnElement);
      });
    });
  };

  enableValidation() {
    //Получаем массив форм
    const formElement = document.querySelector(this._formSelector);
    // console.log(formElement); //тест пройден +

    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // console.log('SABMIT -> OK'); //тест не пройден -
    });

    // console.log(form);
    this._setEventListener(formElement);
  };
}
