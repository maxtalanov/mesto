//Старт: Зона importa
import { name, status } from  '../utils/constants.js';
//Конец: зоны importа

export class UserInfo {
  constructor(selectorName, selectorStatus) {
    this._selectorName = document.querySelector(selectorName);
    this._selectorStatus = document.querySelector(selectorStatus);
  }

  //метод возврат obj с данными пользовотеля (публичный)
  getUserInfo() {
    this._selectorName.value = name.textContent;
    this._selectorStatus.value = status.textContent;
  }

  //метод new данные пользовотеля + добавление их на страницу (публичный)
  setUserInfo() {
    name.textContent = this._selectorName.value;
    status.textContent = this._selectorStatus.value;
  }
}
