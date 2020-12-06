//Старт: Зона importa
import { Popup } from './Popup.js';
//Конец: зоны importа

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {

    super(popupSelector); //Передаем наследника
    console.log(this._popupSelector);
    this._submitForm = submitForm; //функция

    //Переменные
    this._form = this._popupSelector.querySelector('.form');
    this._inputs = this._form.querySelectorAll('.form__input');
  }

 //Метод закрытия (родителя)
  close() {
    this._form.reset();
    super.close();
  }

  //метод сбора информации с форм (приватный)
  _getInputValues() {
    this.inputValue = {};

    this._inputs.forEach(elementInput => {
      this.inputValue[elementInput.name] = elementInput.value;
    });
    return this.inputValue;
    console.log(this.inputValue);
  }

  _submitForm(evt) {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
    this.close();
  }

  //метод обработчиков
  setEventListeners() {
    // this._popupSelector.addEventListerin('submit', this._submitForm.bind(this));
    super.setEventListeners();
  }

}
