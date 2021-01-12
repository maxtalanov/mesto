export class UserInfo {
  constructor(nameSelector,  statusSelector) {
    this._name = document.querySelector(nameSelector);
    this. _status = document.querySelector(statusSelector);

    this.nameProfile = document.querySelector('.profile__name');
    this.statusProfile = document.querySelector('.profile__status');
  }

  //метод возврат obj с данными пользовотеля (публичный)
  getUserInfo() {
    // this._nameElement.value = this.nameProfile.textContent;
    // console.log(this._name.textContent);
    // // this. _statusElement.value = this.statusProfile.textContent;

    // console.log(this.nameProfile.textContent)
    return {
      name: this.nameProfile.textContent,
      status: this.statusProfile.textContent,
    };

  }

  //метод new данные пользовотеля + добавление их на страницу (публичный)
  setUserInfo(name, status) {
    // this.nameProfile.textContent = this._nameElement.value;
    // this.statusProfile.textContent = this. _statusElement.value;

    this._name.textContent = name;
    this._status.textContent = status;
  }
}
