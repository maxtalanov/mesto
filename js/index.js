//Клонирует 6ть карточек из коробки
const renderCard = () => {
  const item = initialCards.map(element => getItems(element));

  photoCard.append(...item);
};

const addHandlers = (e) => {
  e.preventDefault();

  const items = getItems({
    name: inputName.value,
    link: inputLink.value
  });
  photoCard.prepend(items);
  form.addEventListener('submit', handlerFormSubmit);
  root.removeEventListener('keydown',  closePopupESC);

  togglePopup(popupCard);
  resetPopup(formCard);
};

const hendlerOpenImg = (data) => {
  imgEl.src = data.link;
  imgEl.alt = data.name;
  textEl.textContent = data.name;

  togglePopup(popupImg);
  root.addEventListener('keydown',  closePopupESC);
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

// функция сброса форм
function resetPopup(f) {
  f.reset();
}
// Обработчик формы Profail
function handlerFormSubmit(evt) {
  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;

  root.removeEventListener('keydown',  closePopupESC);
}

btnOpenPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  addPopup();
  root.addEventListener('keydown',  closePopupESC);
});

btnExitPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  root.removeEventListener('keydown',  closePopupESC);
  resetPopup(form);
});

btnSavePopupProfile.addEventListener('click', (e) => {
  handlerFormSubmit(e);
  togglePopup(popupProfile);
});

btnOpenPopupCard.addEventListener('click', () => {
  togglePopup(popupCard);
  root.addEventListener('keydown',  closePopupESC);
});

btnExitPopupCard.addEventListener('click', () => {
  togglePopup(popupCard);
  root.removeEventListener('keydown',  closePopupESC);
  resetPopup(formCard);
});

btnExitPopupImg.addEventListener('click', () => {
  togglePopup(popupImg);
  root.removeEventListener('keydown',  closePopupESC);
})

formCard.addEventListener('submit', addHandlers);
form.addEventListener('submit', handlerFormSubmit);
renderCard();

// function modalVariant(el) {
//   el.forEach(element => element);
//   return element;
// }
// console.log(modalVariant(namePopup));

//Закрытие popup ESC
function closePopupESC(evt) {
  const popupAction = document.querySelector('.popup_opened')
  if (evt.key === 'Escape') {
    togglePopup(popupAction);
    root.removeEventListener('keydown',  closePopupESC);
  }
}

// root.addEventListener('keydown',  closePopupESC);
// root.removeEventListener('keydown',  closePopupESC);
