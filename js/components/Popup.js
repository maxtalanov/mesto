//Старт: Зона importa
import { root } from '../utils/constants.js';

//Конец: зоны importа

export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  // метод открытия (публичный)
  open() {
    this._popupSelector.classList.add('popup_opened');
    console.log('open() -> OK');
    console.log(this._popupSelector);
  }

  // метод закрытия (публичный)
  close() {
    this._popupSelector.classList.remove('popup_opened');
    console.log('close() -> OK');
    console.log(this._popupSelector);
  }

  // метод закрытия ESC (приватный)
  // _handleEscClose(evt) {
  //     if (evt.key === 'Escape') {
  //       this.close();
  //       root.removeEventListener('keydown',  () => this._handleEscClose());
  //   };
  // }

  // метод btn-exit (публичный)
  setEventListeners() {
    const btnExitPopup = this._popupSelector.querySelector('.popup__btn-exit');

    this._popupSelector.addEventListener('click', () => this.open())
    btnExitPopup.addEventListener('click', () => this.close());
  }
}
