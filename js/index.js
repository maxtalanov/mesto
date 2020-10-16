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

//Кнопки и модальное окно
const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.form__btn-exit');
const buttonSavePopup = document.querySelector('.form__btn-save');

//Фрма
const form = document.querySelector('.form');
const formName = form.querySelector('.form__name');
const formStatus = form.querySelector('.form__status');

//Данные для формы
let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');

// Шаблон карточек
const templateCard = document.querySelector('.template-card');
const photoCard = document.querySelector('.photo-card');


const renderTest = () => {
  const item = initialCards.map(element => getItems(element));

  photoCard.append(...item);
};


const getItems = (data) => {
  const card = templateCard.content.cloneNode(true);
  card.querySelector('.card__title').innerText = data.name;
  card.querySelector('.card__img').src = data.link;
  card.querySelector('.card__img').alt = data.name;

  return card;
};

//открытие закрытие попапа
function popupToggle() {
  popup.classList.toggle('popup_opened');
};
buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);
buttonSavePopup.addEventListener('click', popupToggle);


//вставка дданных в попап
function addPopup() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
};
buttonOpenPopup.addEventListener('click', addPopup);

// Обработчик формы
function formSubmitHandler(evt) {

  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;
};
form.addEventListener('submit', formSubmitHandler);

renderTest();
