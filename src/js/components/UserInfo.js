export class UserInfo {
  constructor(nameSelector,  statusSelector) {
    this._name = nameSelector;
    this. _status = statusSelector;

    this.nameProfile = document.querySelector('.profile__name');
    this.statusProfile = document.querySelector('.profile__status');
  }

  //метод возврат obj с данными пользовотеля (публичный)
  getUserInfo() {
    return {
      name: this._name,
      status: this._status,
    };
  }

  //метод new данные пользовотеля + добавление их на страницу (публичный)
  setUserInfo(newName, newStatus) {
    this._name = newName;
    this._status = newStatus;
  }

  //Метод
  updateUserInfo() {
    this._nameElem.textContent = this._name;
    this._statusElem.textContent = this._status
  }
}
