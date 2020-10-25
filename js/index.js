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

const hendlerOpenImg = (data) => {
  imgEl.src = data.link;
  imgEl.alt = data.name;
  textEl.textContent = data.name;
  togglePopup(popupImg);
  };

const handlerLike = (evt) => {
  evt.target.classList.toggle('card__btn-like_active');
};


const handlerRemove = (evt) => {
  evt.target.closest('.card').remove();
};

const getItems = (data) => {
  const card = templateCard.content.cloneNode(true);
  const cardImages = card.querySelector('.card__img');

  card.querySelector('.card__title').textContent = data.name;
  cardImages.src = data.link;
  cardImages.alt = data.name;

  const btnRemove = card.querySelector('.trash');
  const btnLike = card.querySelector('.card__btn-like');
  btnRemove.addEventListener('click', handlerRemove);
  btnLike.addEventListener('click', handlerLike);
  cardImages.addEventListener('click', () => hendlerOpenImg(data));

  return card;
}

function addPopup() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
}

//функция открытие закрытие попапа
function togglePopup(p) {
  p.classList.toggle('popup_opened');
}

function resetPopup() {
  form.reset();
}
// Обработчик формы
function handlerFormSubmit(evt) {
  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;
}

btnOpenPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  addPopup();
});

btnExitPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  resetPopup();
});

btnSavePopupProfile.addEventListener('click', (e) => {
  handlerFormSubmit(e);
  togglePopup(popupProfile);
});

btnOpenPopupCard.addEventListener('click', () => {
  togglePopup(popupCard);
});

btnExitPopupCard.addEventListener('click', () => {
  togglePopup(popupCard);
  resetPopup();
});

btnCreatePopupCard.addEventListener('click', () => {
  popupToggle(popupCard);
});

btnExitPopupImg.addEventListener('click', () => {
  togglePopup(popupImg);
})

form.addEventListener('submit', handlerFormSubmit);
renderCard();
addHandlers();
