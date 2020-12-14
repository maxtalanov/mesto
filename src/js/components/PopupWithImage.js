//Старт: Зона importa
import { Popup } from './Popup.js';
//Конец: зоны importа

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector); //Передаем наследника

    //переменные
    this._cardImgage = this._popupSelector.querySelector('.show-img__img');
    this._cardText = this._popupSelector.querySelector('.show-img__text');
  }

  open(link, text) {
    this._cardImgage.src = link;
    this._cardImgage.alt = text;
    this._cardText.textContent = text;
    super.open();
  }
}
