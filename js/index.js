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
const btnCreatePopupCard = popupCard.querySelector('.form__btn-create');

const popupImg = document.querySelector('.popup_type_img');
const btnExitPopupImg = popupImg.querySelector('.show-img__btn-exit');
const imgEl = popupImg.querySelector('.show-img__img');
const textEl = popupImg.querySelector('.show-img__text');

//Фрма для профайла
const form = document.querySelector('.form');
const formName = form.querySelector('.form__name');
const formStatus = form.querySelector('.form__status');

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


const renderCard = () => {
  const item = initialCards.map(element => getItems(element));

  photoCard.append(...item);
};

const addHandlers = () => {
  btnCreatePopupCard.addEventListener('click', () => {
    const items = getItems({
      name: inputName.value,
      link: inputLink.value
    });
    photoCard.prepend(items);

    inputName.value = '';
    inputLink.value = '';
  });
};

// const hendlerOpenImg = () => {
//   card.querySelector('.card__img').addEventListener('click', () => {
//   popupImg.querySelector('.show-img__img').src = data.link;
//   popupImg.querySelector('.show-img__img').alt = data.name;
//   popupImg.querySelector('show-img__text').innerText = data.name;
//   popupToggle(popupImg);
//   })};

const hendlerLike = (evt) => {
  evt.target.classList.toggle('card__btn-like_active');
};


const handlerRemove = (evt) => {
  evt.target.closest('.card').remove();
};

const getItems = (data) => {
  const card = templateCard.content.cloneNode(true);
  card.querySelector('.card__title').innerText = data.name;
  card.querySelector('.card__img').src = data.link;
  card.querySelector('.card__img').alt = data.name;

  card.querySelector('.card__img').addEventListener('click', () => {
    popupImg.querySelector('.show-img__img').src = data.link;
    popupImg.querySelector('.show-img__img').alt = data.name;
    popupImg.querySelector('.show-img__text').innerText = data.name;
    popupToggle(popupImg);
  })

  // const btnImgOpen = card.querySelector('.card__img');
  const btnRemove = card.querySelector('.trash');
  const btnLike = card.querySelector('.card__btn-like');
  // btnImgOpen.addEventListener('click', hendlerOpenImg);
  btnRemove.addEventListener('click', handlerRemove);
  btnLike.addEventListener('click', hendlerLike);

  return card;
}

function addPopup() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
}

//функция открытие закрытие попапа
function popupToggle(p) {
  p.classList.toggle('popup_opened');
}

// Обработчик формы
function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;
}

btnOpenPopupProfile.addEventListener('click', () => {
  popupToggle(popupProfile);
  addPopup();
});

btnExitPopupProfile.addEventListener('click', () => {
  popupToggle(popupProfile);
});

btnSavePopupProfile.addEventListener('click', (e) => {
  formSubmitHandler(e);
  popupToggle(popupProfile);
});

btnOpenPopupCard.addEventListener('click', () => {
  popupToggle(popupCard);
});

btnExitPopupCard.addEventListener('click', () => {
  popupToggle(popupCard);
});

btnCreatePopupCard.addEventListener('click', () => {
  popupToggle(popupCard);
});

btnExitPopupImg.addEventListener('click', () => {
  popupToggle(popupImg);
})

form.addEventListener('submit', formSubmitHandler);
renderCard();
addHandlers();
