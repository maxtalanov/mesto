import { imgEl, textEl, popupImg } from  './const.js';
import { togglePopup, resetForm } from './utils.js';


export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._template = document.querySelector(templateSelector).content.querySelector('.card');
  };

  //Удаллить карточку
  _remove () {
    this._card.remove();
  };

  //Лайк карточки
  _like() {
    this._cardLike.classList.toggle('card__btn-like_active');
  };

  // Открыть картинку в попап
  _openCardImg() {
    imgEl.src = this._link;
    imgEl.alt = this._name;
    textEl.textContent = this._name;

    togglePopup(popupImg);
  };

  // Рендер карточек
  render() {
    //клонирование котейнера
    this._card = this._template.cloneNode(true);

    //константы
    this._cardImage = this._card.querySelector('.card__img');
    this._cardText = this._card.querySelector('.card__title');
    this._cardRemove = this._card.querySelector('.trash');
    this._cardLike = this._card.querySelector('.card__btn-like');


    //данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;

    //Обработчики
    this._cardRemove.addEventListener('click', () => this._remove());
    this._cardLike.addEventListener('click', () => this._like());
    this._cardImage.addEventListener('click', () => this._openCardImg(this._link, this._name));

    // console.log(this._card);
    return this._card;
  };

};
