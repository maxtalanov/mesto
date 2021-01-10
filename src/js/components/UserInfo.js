export class UserInfo {
  constructor(_nameElement,  _statusElement) {
    this._nameElement = document.querySelector(_nameElement);
    this. _statusElement = document.querySelector( _statusElement);

    this.nameProfile = document.querySelector('.profile__name');
    this.statusProfile = document.querySelector('.profile__status');
  }

  //метод возврат obj с данными пользовотеля (публичный)
  getUserInfo() {
    this._nameElement.value = this.nameProfile.textContent;
    this. _statusElement.value = this.statusProfile.textContent;
  }

  //метод new данные пользовотеля + добавление их на страницу (публичный)
  setUserInfo() {
    this.nameProfile.textContent = this._nameElement.value;
    this.statusProfile.textContent = this. _statusElement.value;
  }
}
