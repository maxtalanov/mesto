export class UserInfo {
  constructor(nameSelector,  statusSelector) {
    this._nameElement = nameSelector;
    this. _statusElement = statusSelector;

    this._name = '';
    this._status = '';
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
    this._nameElement.textContent = this._name;
    this._statusElement.textContent = this._status

    console.log(this._name);
    console.log(this._status);
  }
}
