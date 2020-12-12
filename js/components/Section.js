//Старт: Зона importa

//Конец: Зоны importа

export class Section {
  constructor({inItems, renderer}, containerSelector) {
    this._inItems = inItems; //это массив данных
    this._renderer = renderer; // это функция

    this._container = containerSelector; //контейнер куда добавить
  }

  // метод отрисовки элемента (публичный)
  renderer() {
    this._inItems.forEach(elItem => {
      this._renderer(elItem);
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
