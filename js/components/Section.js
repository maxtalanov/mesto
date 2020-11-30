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
      // console.log('inital card for massiv -> OK');
      this._renderer(elItem);
    });
  }

  //метод добовляет DOM в контейнер (публичный)
  addItem(element) {
    // console.log('NEW ELEMENT -> OK');
    this._container.append(element);
  }
}
