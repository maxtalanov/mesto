//Старт: Зона importa

import { popup } from "../utils/constants";
import { Popup } from "./Popup";

//Конец: зоны importа

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {

    super(popupSelector); //Передаем наследника
    this._submitForm = submitForm; //функция


  }

  //метод сбора информации с форм (приватный)
  _getInputValues() {

  }

  //Метод закрытия (родителя)
  close() {
    this._popupSelector.reset();
    super.close();
  }

  setEventListeners() {
    super.btnExitPopup.addEventListener('click', () => this.close());
    //обработчик сабмита
  }
}
