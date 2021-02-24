//Старт: Зона importa
import { Popup } from './Popup.js';
//Конец: зоны importа

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector); //Передаем наследника
    this._submitForm = submitForm; //функция

    //Переменные
    this._form = this._popupSelector.querySelector('.form');
    this._inputs = this._form.querySelectorAll('.form__input');
    this._submitBtnIsLouding = this._popupSelector.querySelector('.form__btn-input');
    this._submitBtnLoudingOff= this._submitBtnIsLouding.value;
    // console.log(this._submitBtnLoudingOff, 'p');
  }

  //
renderLoading(isLoading) {
  // console.log(this._submitBtnIsLouding);
  // console.log(this._submitBtnLoudingOff) ;
    if (isLoading) {
      this._submitBtnIsLouding.value = 'Сохранение...';
        // console.log('Метод ON' + 'Папап формы');
      } else {
        this._submitBtnIsLouding.value = this._submitBtnLoudingOff;
        // console.log('Метод OFF' + 'Папап формы');
      }
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
  }

  _submitFormHendler(evt) {
    evt.preventDefault();

    this._submitForm(this._getInputValues());
    this.close();
  }

  //метод обработчиков
  setEventListeners() {
    this._form.addEventListener('submit', this._submitFormHendler.bind(this));
    super.setEventListeners();
  }

}

