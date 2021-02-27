export class Card {
  constructor({dataCard, templateSelector, handleCardClick, handleCardRemoveClick}, api) {
    //Данные дата
    this._myId = dataCard.myId; //Мой идентификатор пользователя
    this._cardId = dataCard._id; //Идентификатор карточки
    this.userCardId = dataCard.owner._id; //Владелец карточки
    this._name = dataCard.name; // Имя карточки
    this._link = dataCard.link; //Ссылка на ккартинку карточки
    this._likeCounter = dataCard.likes; //Массив лайкнувших
    // console.log(this._likeCounter);

    this._template = document.querySelector(templateSelector).content.querySelector('.card'); //Шаблон разметки карточки

    this._handleCardClick = handleCardClick; // ф-ия клика по img карточки
    this._handleRemoveCard = handleCardRemoveClick; //ф-ия клика на делит карточки
    this._api = api;
  };

  //1. Метод: Удаллить карточку
  remove() {
    this._card.remove();
    this._card = null;
  };


  //2. Метод: Улаления кнопки корзины на чужих карточках
  _removeBtnTrashCard() {
    if (this._myId !== this.userCardId) {
      this._card.querySelector('.trash').remove();
    };
  };

  //3. Метод: Перебор массива лайков и определения, есть ли мой
  isLiked() {
      return Boolean(this._likeCounter.find(likes =>
        likes._id == this._myId
      ));
    }

  //4. Метод: Проверки действия для лайка
  _likeIdentify(idlike){
    if(this.isLiked()) {
      this._likeDelete(idlike);
    } else {
      this._likePut(idlike);
    }
  }

  //5. Метод: Отправка лайка на сервер
  _likePut(idlike) {
    // console.log(`Карточка с этим id:${idlike.id} перешла в этап постановки лайка и передачи данных на сервер`);
    this._api
      .addLike(idlike.id)
      .then((res) => {
        console.log(res);
        this._likeCounter = res.likes;
        this._updateLike();
        console.log(this._likeCounter);
        console.log(`Сервер ответил:`, res);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу
        https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
      });
  }

  //6. Метод: Удаления лайка с сервера.
  _likeDelete(idlike) {
      // console.log(`Карточка с этим id:${idlike.id} перешла в этап снятия лайка и передачи данных на сервер`);
      this._api
      .removeLike(idlike.id)
      .then((res) => {
        console.log(res);
        this._likeCounter = res.likes;
        this._updateLike();
        console.log(this._likeCounter);
        console.log(`Сервер ответил: ${res}`);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу
        https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
      });
  }

  //7. Метод: Обновления лайка
  _updateLike() {
    // debugger
    this._cardLikeText.textContent = this._likeCounter.length;

    if (this.isLiked()) {
      this._cardLike
        .classList
        .add('card__btn-like_active');
    }else{
      this._cardLike
      .classList
      .remove('card__btn-like_active');
    }

  }

  //8. Метод: Рендер карточек
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


    //Обработчики
    this._setEventListerin();
    this._removeBtnTrashCard();
    this._updateLike();

    return this._card;
  };

  //9. Метод: Групировки обработчиков
  _setEventListerin() {
    this._cardRemove.addEventListener('click', () => this._handleRemoveCard({cardId: this._cardId}));
    this._cardLike.addEventListener('click', () => this._likeIdentify({id: this._cardId}));
    this._cardImage.addEventListener('click', () => this._handleCardClick({name: this._name, link: this._link}));
  }

};
