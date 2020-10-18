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

// Кнопки и модальное окно
const popupProfile = document.querySelector('.popup_type_profile');
const btnOpenPopupProfile = document.querySelector('.profile__edit-button');
const btnExitPopupProfile = popupProfile.querySelector('.form__btn-exit');
const btnSavePopupProfile = popupProfile.querySelector('.form__btn-save');

const popupCard = document.querySelector('.popup_type_card');
const btnOpenPopupCard = document.querySelector('.profile__add-button');
const btnExitPopupCard = popupCard.querySelector('.form__btn-exit');
const btnSavePopupCard = popupCard.querySelector('.form__btn-create');



//Фрма
const form = document.querySelector('.form');
const formName = form.querySelector('.form__name');
const formStatus = form.querySelector('.form__status');

//Данные для формы
const name = document.querySelector('.profile__name');
const status = document.querySelector('.profile__status');

// Шаблон карточек
const templateCard = document.querySelector('.template-card');
const photoCard = document.querySelector('.photo-card');


const renderCard = () => {
  const item = initialCards.map(element => getItems(element));

  photoCard.append(...item);
};


const handlerRemove = (event) => {
  event.target.closest('.card').remove();
};

const getItems = (data) => {
  const card = templateCard.content.cloneNode(true);
  card.querySelector('.card__title').innerText = data.name;
  card.querySelector('.card__img').src = data.link;
  card.querySelector('.card__img').alt = data.name;

  const btnRemove = card.querySelector('.trash');
  btnRemove.addEventListener('click', handlerRemove);

  return card;
};

function addPopup() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
};

//функцияЖ открытие закрытие попапа
function popupToggle(p) {
  p.classList.toggle('popup_opened');
};

// Обработчик формы
function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;
};

btnOpenPopupProfile.addEventListener('click', () => {
  console.log(1);
  popupToggle(popupProfile);
  addPopup();
});

btnExitPopupProfile.addEventListener('click', () => {
  console.log(2);
  popupToggle(popupProfile);
});

btnSavePopupProfile.addEventListener('click', (e) => {
  console.log(3);
  formSubmitHandler(e);
  popupToggle(popupProfile);
});

btnOpenPopupCard.addEventListener('click', () => {
  console.log(4);
  popupToggle(popupCard);
});

btnExitPopupCard.addEventListener('click', () => {
  console.log(5);
  popupToggle(popupCard);
});

btnSavePopupCard.addEventListener('click', () => {
  console.log(6);
  popupToggle(popupCard);
});

form.addEventListener('submit', formSubmitHandler);
renderCard();
