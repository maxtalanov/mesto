const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const root = document.querySelector('.root');

// Кнопки и модальное окно
const popups = document.querySelectorAll('.popup');
const popup = document.querySelector('.popup');

const popupProfile = document.querySelector('.popup_type_profile');
const btnOpenPopupProfile = document.querySelector('.profile__edit-button');
const btnExitPopupProfile = popupProfile.querySelector('.form__btn-exit');
const btnSavePopupProfile = popupProfile.querySelector('.form__btn-save');

const popupCard = document.querySelector('.popup_type_card');
const btnOpenPopupCard = document.querySelector('.profile__add-button');
const btnExitPopupCard = popupCard.querySelector('.form__btn-exit');
const btnCreatePopupCard = popupCard.querySelector('.form__btn-create');

const popupImg = document.querySelector('.popup_type_img');
const btnExitPopupImg = popupImg.querySelector('.show-img__btn-exit');
const imgEl = popupImg.querySelector('.show-img__img');
const textEl = popupImg.querySelector('.show-img__text');

//Фрма для профайла
const formProfile = document.querySelector('.form__profile');
const formName = formProfile.querySelector('.form__name');
const formStatus = formProfile.querySelector('.form__status');

// Форма для card
const formCard = document.querySelector('.form-card');
const inputName = formCard.querySelector('.form__in-name');
const inputLink = formCard.querySelector('.form__in-link');

//Данные для формы
const name = document.querySelector('.profile__name');
const status = document.querySelector('.profile__status');

// Шаблон карточек
const templateCard = document.querySelector('.template-card');
const photoCard = document.querySelector('.photo-card');
