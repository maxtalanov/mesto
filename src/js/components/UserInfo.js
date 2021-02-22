export class UserInfo {
  constructor(nameSelector,  statusSelector, avatarSelector) {
    this._nameElement = nameSelector;
    this. _statusElement = statusSelector;
    this._avatarElement = avatarSelector;

    this._name = '';
    this._status = '';
    this._avatar = '';
  }

  //метод возврат obj с данными пользовотеля (публичный)
  getUserInfo() {
    return {
      name: this._name,
      about: this._status,
    };
  }

  //метод new данные пользовотеля + добавление их на страницу (публичный)
  setUserInfo(newName, newStatus, newAvatar) {
    this._name = newName;
    this._status = newStatus;
    this._avatar = newAvatar;
  }

  //Метод апдейт данных (публичный)
  updateUserInfo() {
    this._nameElement.textContent = this._name;
    this._statusElement.textContent = this._status
    this._avatarElement.src = this._avatar;
  }
}
