//Старт: Зона importa
import './index.css'

import {
  initialCards,
  btnOpenPopupProfile,
  btnOpenPopupCard,
  photoCard
} from  '../js/utils/constants.js';
import { Card } from '../js/components/card.js';
import { FormValidator } from '../js/components/FormValidator.js';
import { Section } from '../js/components/Section.js';
import { UserInfo } from '../js/components/UserInfo.js';
import { PopupWithForm } from '../js/components/PopupWithForm.js';
import { PopupWithImage } from '../js/components/PopupWithImage.js';
//Конец: зоны importа

//Старт: cекция создания obj

//Рефреш данных
const userInfo = new UserInfo('.form__name', '.form__status');

const popupImage = new PopupWithImage('.popup_type_img');

const popupProfile = new PopupWithForm('.popup_type_profile', (data) => {
  userInfo.setUserInfo(data);
});

const popupCard = new PopupWithForm('.popup_type_card', (data) => {
  const addCard = new Card(data['card-name'], data['card-link'], '.template-card', () => {
    const name = data['card-name'];
    const link = data['card-link'];
    popupImage.open(link, name);

  });
  const cardElement = addCard.render();
  listCards.addNewItem(cardElement);
});

//Сборка карточек при запуску страницы
const listCards = new Section({
  inItems: initialCards,
  renderer: (data) => {
    const card = new Card
      (data.name, data.link, '.template-card', () => {
        const text = data.name;
        const link = data.link;
        popupImage.open(link, text);
      });
    const cardElement = card.render();

    listCards.addItem(cardElement);
  }
}, photoCard);

//Валидатор для форм profile
const formValidatorProfile = new FormValidator(
  '.form-profile',
  '.form__input',
  '.form__btn-input',
  'form__btn-input_state_blocked',
  'form__input_state_invalid',
  'error'
);

//Валидатор для форм card
const formValidatorCard = new FormValidator(
  '.form-card',
  '.form__input',
  '.form__btn-input',
  'form__btn-input_state_blocked',
  'form__input_state_invalid',
  'error'
);

//Обработчик кнопки открытия PROFAILE
btnOpenPopupProfile.addEventListener('click', () => {
  popupProfile.open();
  userInfo.getUserInfo();
});

//Обработчик кнопки открытия CARD
btnOpenPopupCard.addEventListener('click', () => {
  popupCard.open();
});

//Обработчика запускающиеся при загрузке страницы
listCards.renderer();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
