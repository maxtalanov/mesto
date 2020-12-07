//Старт: Зона importa
import {
  initialCards,
  btnOpenPopupProfile,
  btnOpenPopupCard,
  photoCard
} from  './utils/constants.js';
import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './components/Section.js';
import { UserInfo } from './components/UserInfo.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { PopupWithImage } from './components/PopupWithImage.js';
//Конец: зоны importа

//Старт: cекция создания obj

//Рефреш данных
const userInfo = new UserInfo('.form__name', '.form__status');

const popupProfile = new PopupWithForm('.popup_type_profile', (data) => {
  userInfo.setUserInfo(data);
});
popupProfile.setEventListeners();

// const popupCard = new PopupWithForm('.popup_type_card', (data) => {
//   const addCard = new Card(data.name, data.link, '.template-card', () => {
//     const name = data.name
//     const link = data.link
//     popupImg.open(name, link)
//   });
//   const cardElement = addCard.render();
//   photoCard.prepend(cardElement);
// });
// popupCard.setEventListeners();

const popupImage = new PopupWithImage('.popup_type_img');
popupImage.setEventListeners();

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
listCards.renderer() //перенести вниз? Узнать!


//Валидатор для форм profile
const formValidatorProfile = new FormValidator(
  '.form-profile',
  '.form__input',
  '.form__btn-input',
  'form__btn-input_state_blocked',
  'form__input_state_invalid',
  'error'
);

// //Валидатор для форм card
// const formValidatorCard = new FormValidator(
//   '.form-card',
//   '.form__input',
//   '.form__btn-input',
//   'form__btn-input_state_blocked',
//   'form__input_state_invalid',
//   'error'
// );

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

formValidatorProfile.enableValidation();
// formValidatorCard.enableValidation();
