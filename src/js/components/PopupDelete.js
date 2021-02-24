//Старт: Зона importa
import { btnOpenPopupAvatar } from '../utils/constants.js';
import { Popup } from './Popup.js';
//Конец: зоны importа

export class PopupDelete extends Popup {
  constructor(popupSelector, handlerDeleteClick) {
    super(popupSelector); //Передаем наследника
    this._handlerDeleteClick = handlerDeleteClick; //функция

    this.btnSubmit = this._popupSelector.querySelector('.form__btn-input');
    console.log(this.btnSubmit);
  }

  open(removeCard) {
    super.open();
    this._cardId = removeCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this.btnSubmit.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerDeleteClick(this._cardId);
    });
    this.close();
  }
}
