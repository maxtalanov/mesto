export class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;

    console.log(this._headers);
}

  //1. Мето получения информации о пользователе
  getInfoUser() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
    })

    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}.`);
    })
  }

  //2. Метод получения масива карточек
  getIntalCards() {
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    })

    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}. Сервер не доступен.`);
    })
  }

  //3. Метод редактирования профиля
  editYourProfile() {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers
      //тут еще body # ВНИМАНИЕ! #
    })

    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}. Сервер не доступен.`);
    })
  }

  //4. Метод добавления новой карточки
  addNewCard() {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers
    })

    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}. Сервер не доступен.`);
    })
  }

  //5. Метод удаления карточки
  removeCard() {
    return fetch(`${this._url}cards/cardId`, { //тут НАДО ПОПРАВИТЬ БУДЕТ ССЫЛКУ
      method: "DELETE",
      headers: this._headers
    })

    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}. Сервер не доступен.`);
    })
  }

  //6. Метод Сняти и постановки лайка
  deliverToRemoveLike() {

  }

  //7. Метод Изменения аватара
  updateAvatar() {
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers
    })

    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}. Сервер не доступен.`);
    })
  }
}
