//Старт: Зона importa
import { Popup } from './Popup.js';
//Конец: зоны importа

export class PopupDelete extends Popup {
  constructor(popupSelector, ) {
    super(popupSelector); //Передаем наследника
    this.btnYes = this._popupSelector.querySelector('.form__btn-input');
  }

  setSubmitAction(submitAction) {
    this._handlerDeleteClick = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this.btnYes.addEventListener('click', () => {
      this._handlerDeleteClick();
      super.close();
    });
  }
}
