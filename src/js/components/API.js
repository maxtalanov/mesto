export class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;

    this._groupID = 'cohort-20';
    console.log(this._headers);
  }

  //0. Метод: Отвечает за работу синхронной выгрузки информации
  getAllInfo() {

  }

  //1. Мето получения информации о пользователе
  getInfoUser() {
    return fetch(`${this._url}/${this._groupID}/users/me`, {
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
    return fetch(`${this._url}/${this._groupID}/cards`, {
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

  //3. Метод редактирования профиля
  editYourProfile(editDataUser) {
    console.log(editDataUser);
    return fetch(`${this._url}/${this._groupID}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: editDataUser.name,
        about: editDataUser.about
      })
    })

    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}.`);
    })
  }

  //4. Метод добавления новой карточки
  addNewCard(data) {
    return fetch(`${this._url}/${this._groupID}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
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
    return fetch(`${this._url}/${this._groupID}/cards/cardId`, { //тут НАДО ПОПРАВИТЬ БУДЕТ ССЫЛКУ
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
  upAvatar(editDataUser) {
    console.log(editDataUser), 'api 7';
    return fetch(`${this._url}/${this._groupID}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: editDataUser.avatar})
    })

      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}.`);
      })
  }
}

