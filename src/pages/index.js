//Старт: Зона importa
import './index.css'

import {
  btnOpenPopupProfile,
  btnOpenPopupDelete,
  btnOpenPopupCard,
  btnOpenPopupAvatar,
  nameEditProfile,
  statusEditProfile,
  photoCard,
  nameInput,
  statusInput,
  avatarProfile,
} from  '../js/utils/constants.js';
import { Card } from '../js/components/card.js';
import { FormValidator } from '../js/components/FormValidator.js';
import { Section } from '../js/components/Section.js';
import { UserInfo } from '../js/components/UserInfo.js';
import { PopupWithForm } from '../js/components/PopupWithForm.js';
import { PopupWithImage } from '../js/components/PopupWithImage.js';
import { Api } from '../js/components/API.js';
import { Popup } from '../js/components/Popup';

//Конец: зоны importа

//*** new ЭКЗЕМПЛЯРЫ КЛАССОВ ***

  //Работа с сервером
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1',
    headers: {
      authorization: '812904d9-0b6e-4749-b7a8-56c99ef1e2b9',
      'Content-Type': 'application/json'
    }
  });

  //
const userInfo = new UserInfo(nameEditProfile, statusEditProfile, avatarProfile);

  //
const popupImage = new PopupWithImage('.popup_type_img');

  //
const popupProfile = new PopupWithForm('.popup_type_profile', (editDataUser) => {
  console.log(editDataUser, 'Экземпляр класса имя и статус');
  api.editYourProfile(editDataUser)
    .then((editDataUser) => {
      userInfo.setUserInfo(editDataUser.name, editDataUser.about, editDataUser.avatar);
      userInfo.updateUserInfo();
    })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
    console.log(`Проверьте причину в справочнике по адресу
    https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
  });
});

const popupEditAvatar = new PopupWithForm('.popup_type_avatar', (editDataUser) => {
  console.log(editDataUser, 'Экземпляр класс аватар')
  api
    .upAvatar(editDataUser)
    .then((editDataUser) => {
      userInfo.setUserInfo(editDataUser.name, editDataUser.about, editDataUser.avatar);
      userInfo.updateUserInfo();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
      console.log(`Проверьте причину в справочнике по адресу
      https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
    });
});

const popupCard = new PopupWithForm('.popup_type_card', (data) => {
  console.log(data, "popupCard");

  api.addNewCard(data)
    .then((data) => {
      const addCard = new Card(data['name'], data['link'], '.template-card', () => {
        const name = data['name'];
        const link = data['link'];
        popupImage.open(link, name);
      });
      const cardElement = addCard.render();
      listCards.addNewItem(cardElement);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
      console.log(`Проверьте причину в справочнике по адресу
      https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
    });
});

  //Сборка карточек при запуску страницы
const listCards = new Section({
  renderer: (data) => {
    // console.log(data);
    const card = new Card
      (data, '.template-card', () => {
        const text = data.name;
        const link = data.link;
        popupImage.open(link, text);
      });
    const cardElement = card.render();

    listCards.addItem(cardElement);
  }
}, photoCard);

  //Валидатор для форм profile
const formValidatorProfile = new FormValidator('.form-profile', {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-input',
  inactiveButtonClass: 'form__btn-input_state_blocked',
  inputErrorClass: 'form__input_state_invalid',
  errorClass: 'error'
});
  //Валидатор для форм card
const formValidatorCard = new FormValidator('.form-card', {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-input',
  inactiveButtonClass: 'form__btn-input_state_blocked',
  inputErrorClass: 'form__input_state_invalid',
  errorClass: 'error'
});
const formValidatorAvatar = new FormValidator('.form-avatar', {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-input',
  inactiveButtonClass: 'form__btn-input_state_blocked',
  inputErrorClass: 'form__input_state_invalid',
  errorClass: 'error'
});


//*** ОБРАБОТЧИКИ ***

  //Обработчик: выгрузки информации о пользователе
api
  .getInfoUser()
  .then((dataUserInfo) => {
    console.log(dataUserInfo);
    userInfo.setUserInfo(dataUserInfo.name, dataUserInfo.about,  dataUserInfo.avatar);
    userInfo.updateUserInfo();
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
    console.log(`Проверьте причину в справочнике по адресу
    https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
  });

  //Обработчик: выгрузка масива карточек
api
  .getIntalCards()
  .then((cards) => {
    console.log(cards);
    listCards.renderer(cards); //прокидываю в метод render
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
    console.log(`Проверьте причину в справочнике по адресу
    https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
  });

  //Обработчик кнопки открытия PROFAILE
btnOpenPopupProfile.addEventListener('click', () => {
  popupProfile.open();
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  statusInput.value = data.about;
});

//Обработчик кнопки открытия CARD
btnOpenPopupCard.addEventListener('click', () => {
  popupCard.open();
});

// btnOpenPopupDelete.addEventListener('click', () => {});

btnOpenPopupAvatar.addEventListener('click', () => {
  popupEditAvatar.open();

});

//Обработчика запускающиеся при загрузке страницы
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupImage.setEventListeners();

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
formValidatorAvatar.enableValidation();


//Зона теста




