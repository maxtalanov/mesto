//Старт: Зона importa

//Конец: Зоны importа

export class Card {
  constructor(dataCard, templateSelector, handleCardClick, handleCardRemoveClick, api) {
    console.log(dataCard, 'new obj card');

    //Данные дата
    this._myId = dataCard.myId; //Мой идентификатор пользователя
    this._cardId = dataCard._id; //Идентификатор карточки
    this.userCardId = dataCard.owner._id; //Владелец карточки
    this._name = dataCard.name; // Имя карточки
    this._link = dataCard.link; //Ссылка на ккартинку карточки
    this._likeCounter = dataCard.likes; //Кол-во лайков

    this._template = document.querySelector(templateSelector).content.querySelector('.card'); //Шаблон разметки карточки

    this._handleCardClick = handleCardClick; // ф-ия клика по img карточки
    this._handleRemoveCard = handleCardRemoveClick; //ф-ия клика на делит карточки
    this._api = api;
  };

  //Удаллить карточку
  remove() {
    this._card.remove();
    this._card = null;
  };


  //Удалить кнопку с чужих карточек
  _removeBtnTrashCard() {
    if (this._myId !== this.userCardId) {
      this._card.querySelector('.trash').remove();
    };
  }

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
    this._setEventListerin();
    this._removeBtnTrashCard();

    return this._card;
  };

  _setEventListerin() {
    this._cardRemove.addEventListener('click', () => this._handleRemoveCard({cardId: this._cardId}));
    this._cardLike.addEventListener('click', () => this._like());
    this._cardImage.addEventListener('click', () => {this._handleCardClick()});
  }

};
