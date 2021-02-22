//Старт: Зона importa

//Конец: Зоны importа

export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._likeCounter = data.likes;


    this._template = document.querySelector(templateSelector).content.querySelector('.card');

    this._handleCardClick = handleCardClick; // ф-ия
  };

  //Удаллить карточку
  _remove () {
    this._card.remove();
    this._card = null;
  };

  //Лайк карточки
  _like() {
    this._cardLike.classList.toggle('card__btn-like_active');
  };

  //Лайк пользователей
  _likesUsers() {
    return this._likeCounter.length
  }

  // Рендер карточек
  render() {
    //клонирование котейнера
    this._card = this._template.cloneNode(true);

    //константы
    this._cardImage = this._card.querySelector('.card__img');
    this._cardText = this._card.querySelector('.card__title');
    this._cardRemove = this._card.querySelector('.trash');
    this._cardLike = this._card.querySelector('.card__btn-like');
    this._cardLikeText = this._card.querySelector('.card__like-text');

    //данные
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
    this._cardLikeText.textContent = this._likesUsers();

    //Обработчики
    this._cardRemove.addEventListener('click', () => this._remove());
    this._cardLike.addEventListener('click', () => this._like());
    this._cardImage.addEventListener('click', () => {this._handleCardClick()});

    return this._card;
  };

};
