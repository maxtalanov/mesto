export class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer; // это функция
    this._container = containerSelector; //контейнер куда добавить
  }

  // метод отрисовки элемента (публичный)
renderer(cards) {
    cards.forEach(elItem => {
      return this._renderer(elItem);
    });
  }

  //метод добовляет DOM в контейнер (публичный)
  addItem(element) {
    this._container.append(element);
  }

  //метод добавления карточки через попап (публичный)
  addNewItem(element) {
    this._container.prepend(element);
  }
}
