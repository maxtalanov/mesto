//Старт: Зона importa

//Конец: зоны importа

export class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);

    //Переменные
    this._elementRoot = document.querySelector('.root');
    this._btnExitPopup = this._popupSelector.querySelector('.popup__btn-exit');
  }

  // метод открытия (публичный)
  open() {
    this._popupSelector.classList.add('popup_opened');
    this._elementRoot .addEventListener('keydown', this._handleEscClose);
  }

  // метод закрытия (публичный)
  close() {
    this._popupSelector.classList.remove('popup_opened');
    this._elementRoot.removeEventListener('keydown',  this._handleEscClose);
  }

  // метод закрытия ESC (приватный)
  _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
    };
  }

  // метод закрытия owerlay (приватный)
  _handleOverlayClose(evt) {
    if (evt.target === this._popupSelector) {
        this.close();
    }
}

  // метод btn-exit (публичный)
  setEventListeners() {
    this._popupSelector.addEventListener('click', this._handleOverlayClose.bind(this));
    this._btnExitPopup.addEventListener('click', this.close.bind(this));
  }
}

