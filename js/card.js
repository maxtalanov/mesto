export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._template = templateCard.querySelector(templateSelector);
    console.log(this._template);
  };

  _getTemplate() {
    this.content =  this._template.content.cloneNode(true);
  }

};
