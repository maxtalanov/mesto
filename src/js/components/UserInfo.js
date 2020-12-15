//Старт: Зона importa
import { name, status } from  '../utils/constants.js';
//Конец: зоны importа

export class UserInfo {
  constructor(_nameElement,  _statusElement) {
    this._nameElement = document.querySelector(_nameElement);
    this. _statusElement = document.querySelector( _statusElement);
  }

  //метод возврат obj с данными пользовотеля (публичный)
  getUserInfo() {
    this._nameElement.value = name.textContent;
    this. _statusElement.value = status.textContent;
  }

  //метод new данные пользовотеля + добавление их на страницу (публичный)
  setUserInfo() {
    name.textContent = this._nameElement.value;
    status.textContent = this. _statusElement.value;
  }
}
