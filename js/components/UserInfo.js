//Старт: Зона importa
import { formName, formStatus } from  './utils/constants.js';
//Конец: зоны importа

export class UserInfo {
  constructor(selectorName, selectorStatus) {
    this._selectorName = document.querySelector(selectorName);
    this._selectorStatus = document.querySelector(selectorStatus)
  }

  //метод возврат obj с данными пользовотеля (публичный)
  getUserInfo() {
    formName.value = this._selectorName.textContent;
    formStatus.value = this._selectorStatus.textContent;
  }

  //метод new данные пользовотеля + добавление их на страницу (публичный)
  setUserInfo() {
    this._selectorName.textContent = formName.value;
    this._selectorStatus.textContent = formStatus.value;
  }
}
