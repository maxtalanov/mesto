//Старт: Зона importa
import { imgEl, textEl } from  './const.js';
import { popup } from "../utils/constants";

//Конец: зоны importа

export class PopupWithImage {
  constructor(popupSelector) {
    super(popupSelector); //Передаем наследника
  }

  open() {
    super.open();
    imgEl.src = this._link;
    imgEl.alt = this._name;
    textEl.textContent = this._name;
  }
}
