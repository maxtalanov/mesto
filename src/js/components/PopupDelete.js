//Старт: Зона importa
import { Popup } from './Popup.js';
//Конец: зоны importа

export class PopupDelete extends Popup {
  constructor(popupSelector, handlerDeleteClick) {
    super(popupSelector); //Передаем наследника
    this._handlerDeleteClick = handlerDeleteClick; //функция

    this.btnYes = this._popupSelector.querySelector('.form__btn-input');
  }

  open(removeCard) {
    super.open();
    this._cardId = removeCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this.btnYes.addEventListener('click', () => {
      this._handlerDeleteClick(this._cardId);
      super.close();
    });

  }
}
