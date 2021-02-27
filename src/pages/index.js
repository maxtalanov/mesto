//Старт: Зона importa
import './index.css'

import {
  btnOpenPopupProfile,
  btnOpenPopupCard,
  btnOpenPopupAvatar,
  nameEditProfile,
  statusEditProfile,
  photoCard,
  nameInput,
  statusInput,
  avatarProfile,
} from '../js/utils/constants.js';

import { Card } from '../js/components/card.js';
import { FormValidator } from '../js/components/FormValidator.js';
import { Section } from '../js/components/Section.js';
import { UserInfo } from '../js/components/UserInfo.js';
import { Popup } from '../js/components/Popup.js';
import { PopupDelete } from '../js/components/PopupDelete.js';
import { PopupWithForm } from '../js/components/PopupWithForm.js';
import { PopupWithImage } from '../js/components/PopupWithImage.js';
import { Api } from '../js/components/API.js';
//Конец: зоны importа

//Переменная с пользователем
let myId = null;

function createCard(dataCard) {

  const card = new Card({
    dataCard: { ...dataCard, myId: myId },
    templateSelector: '.template-card',
    handleCardClick: (data) => {

      const name = data.name;
      const link = data.link

      popupImage.open(link, name)
    },
    handleCardRemoveClick: (removeCard) => {
      popupDelete.open();
      popupDelete.setSubmitAction(() => {
        api
          .removeCard(removeCard.cardId)
          .then((deleteCardId) => {
            card.remove(deleteCardId);
          })
          .catch((err) => {
            console.log(err); // выведем ошибку в консоль
            console.log(`Проверьте причину в справочнике по адресу
              https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
          });
      })
    }
  }, api)

  return card.render();
};


//Работа с сервером
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1',
  headers: {
    authorization: '812904d9-0b6e-4749-b7a8-56c99ef1e2b9',
    'Content-Type': 'application/json'
  }
});

//Экземпляр класса UserInfo ребенок UserInfo
const userInfo = new UserInfo(nameEditProfile, statusEditProfile, avatarProfile);

//Экземпляр класса popupProfile ребенок PopupWithImage
const popupProfile = new PopupWithForm('.popup_type_profile', (editDataUser) => {
  // console.log(editDataUser, 'Экземпляр класса имя и статус');

  popupProfile.renderLoading(true);
  api.editYourProfile(editDataUser)
    .then((editDataUser) => {
      userInfo.setUserInfo(editDataUser.name, editDataUser.about, editDataUser.avatar);
      userInfo.updateUserInfo();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
      console.log(`Проверьте причину в справочнике по адресу
    https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    });
});

//Экземпляр класса popupEditAvatar ребенок PopupWithForm
const popupEditAvatar = new PopupWithForm('.popup_type_avatar', (editDataUser) => {
  // console.log(editDataUser, 'Экземпляр класс аватар')

  popupEditAvatar.renderLoading(true);
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
    })
    .finally(() => {
      popupEditAvatar.renderLoading(false);
    });
});

// //Экземпляр класса popupDelete ребенок PopupDelete
const popupDelete = new PopupDelete('.popup_type_delet');

//Экземпляр класса popupImage ребенок PopupWithImage
const popupImage = new PopupWithImage('.popup_type_img');

//Экземпляр класса popupCard ребенок PopupWithForm
const popupCard = new PopupWithForm('.popup_type_card', (data) => {
  // console.log(data, "popupCard");

  popupCard.renderLoading(true);
  api.addNewCard(data)
    .then((data) => {
      // console.log(`Ответ сервера: ${data}. Начинаем рендрить карточку из полученных данных.`);
      // console.log(data);
      listCards.addNewItem(createCard(data));
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
      console.log(`Проверьте причину в справочнике по адресу
      https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
    })
    .finally(() => {
      popupCard.renderLoading(false);
    });
});

//Экземпляр класса listCards ребенок Section
const listCards = new Section({
  renderer: (dataCard) => {
    // console.log(dataCard);

    listCards.addItem(createCard(dataCard));
  }
}, photoCard);

//Валидатор#1 для форм PROFILE
const formValidatorProfile = new FormValidator('.form-profile', {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-input',
  inactiveButtonClass: 'form__btn-input_state_blocked',
  inputErrorClass: 'form__input_state_invalid',
  errorClass: 'error'
});
//Валидатор#2 для форм CARD
const formValidatorCard = new FormValidator('.form-card', {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-input',
  inactiveButtonClass: 'form__btn-input_state_blocked',
  inputErrorClass: 'form__input_state_invalid',
  errorClass: 'error'
});
//Валидатор#3 для форм AVATAR
const formValidatorAvatar = new FormValidator('.form-avatar', {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn-input',
  inactiveButtonClass: 'form__btn-input_state_blocked',
  inputErrorClass: 'form__input_state_invalid',
  errorClass: 'error'
});


//*** ОБРАБОТЧИКИ ***
api.getAllInfo()
  .then(([dataUserInfo, cards]) => {
    myId = dataUserInfo._id;
    userInfo.setUserInfo(dataUserInfo.name, dataUserInfo.about, dataUserInfo.avatar);
    userInfo.updateUserInfo();
    listCards.renderer(cards); //прокидываю в метод render
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
    console.log(`Проверьте причину в справочнике по адресу
    https://yandex.ru/support/webmaster/error-dictionary/http-codes.html`) //Даем информацию как проверить причину ошибки
  });

//Обработчик: Открития попап AVATAR
btnOpenPopupAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
});

//Обработчик: открытия попап PROFAILE
btnOpenPopupProfile.addEventListener('click', () => {
  popupProfile.open();
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  statusInput.value = data.about;
});

//Обработчик: Открития попап CARD
btnOpenPopupCard.addEventListener('click', () => {
  popupCard.open();
});

//Обработчики запускающeeся при загрузке страницы
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupImage.setEventListeners();
popupDelete.setEventListeners();

//Обработчики: Валидации форм - 1.profile, 1.card, 1.avatar
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
formValidatorAvatar.enableValidation();




