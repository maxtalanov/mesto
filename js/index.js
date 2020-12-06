//Старт: Зона importa
import {
  initialCards,
  btnOpenPopupProfile,
  btnOpenPopupCard,
  formProfile,
  formCard,
  inputName,
  inputLink,
  photoCard,
} from  './utils/constants.js';
import { Card } from './card.js';
import { resetForm } from './utils.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './components/Section.js';
import { UserInfo } from './components/UserInfo.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { PopupWithImage } from './components/PopupWithImage.js';
//Конец: зоны importа

//Старт: cекция создания obj
const popupProfile = new PopupWithForm('.popup_type_profile', () => {

});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm('.popup_type_card', (data) => {
  const addCard = new Card(data.name, data.link, '.template-card',() => {
    const name = data.name
    const link = data.link
    popupImg.open(name, link)
  });
  const cardElement = addCard.render();
  photoCard.prepend(cardElement);
});
popupCard.setEventListeners();

const popupImage = new PopupWithImage('.popup_type_img');
popupImage.setEventListeners();

//Рефреш данных
const userInfo = new UserInfo('.form__name', '.form__status');

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

//Валидатор для форм card
const formValidatorCard = new FormValidator(
  '.form-card',
  '.form__input',
  '.form__btn-input',
  'form__btn-input_state_blocked',
  'form__input_state_invalid',
  'error'
);

//Конец: cекция создания obj


// // Создание новой карточки
// const handleAddCard = (e) => {
//   e.preventDefault();

//   const items = getItem({
//     name: inputName.value,
//     link: inputLink.value
//   });
//   photoCard.prepend(items);

//   resetForm(formCard);
// };

// Обработчик формы Profail
function handleFormSubmit(evt) {
  evt.preventDefault();

  userInfo.setUserInfo();
  popupProfile.close();
};

//Обработчик кнопки открытия PROFAILE
btnOpenPopupProfile.addEventListener('click', () => {
  popupProfile.open();
  userInfo.getUserInfo();
  popupProfile._getInputValues();
});

//Обработчик кнопки открытия CARD
btnOpenPopupCard.addEventListener('click', () => {
  popupCard.open();
});

//Обработчика запускающиеся при загрузке страницы
// formCard.addEventListener('submit', handleAddCard);
formProfile.addEventListener('submit', handleFormSubmit);
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
