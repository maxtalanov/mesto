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
    console.log(editDataUser, 'API 3');
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
    console.log(data, 'API 4');
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
  removeCard(id) {
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

  //6. Метод: Постановки лайка
  addLike(id) {
    console.log('api 6');
    return fetch(`${this._url}/${this._groupID}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers
    })
  }

  //7.Метод: Cнятия лайка
removeLike(id) {
  console.log('api 6');
  return fetch(`${this._url}/${this._groupID}/cards/likes/${id}`, {
    method: "DELETE",
    headers: this._headers
  })
}

  //8. Метод Изменения аватара
  upAvatar(editDataUser) {
    console.log(editDataUser, 'api 8');
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

