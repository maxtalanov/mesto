//Клонирует 6ть карточек из коробки
const renderCard = () => {
  const item = initialCards.map(element => getItem(element));

  photoCard.append(...item);
};

// Создание new карточкек
const addHandlers = (e) => {
  e.preventDefault();

  const items = getItem({
    name: inputName.value,
    link: inputLink.value
  });
  photoCard.prepend(items);
  formProfile.addEventListener('submit', handleFormSubmit);
  root.removeEventListener('keydown',  closePopupESC);

  togglePopup(popupCard);
  resetForm(formCard);
};

// Открыть картинку
const hendleOpenImg = (data) => {
  imgEl.src = data.link;
  imgEl.alt = data.name;
  textEl.textContent = data.name;

  togglePopup(popupImg);
  root.addEventListener('keydown',  closePopupESC);
  };

// Лайк карточке
const handleLike = (evt) => {
  evt.target.classList.toggle('card__btn-like_active');
};

// Удалить карточку
const handleRemove = (evt) => {
  evt.target.closest('.card').remove();
};

//Карточки
const getItem = (data) => {
  const card = templateCard.content.cloneNode(true);
  const cardImage = card.querySelector('.card__img');

  card.querySelector('.card__title').textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const btnRemove = card.querySelector('.trash');
  const btnLike = card.querySelector('.card__btn-like');
  btnRemove.addEventListener('click', handleRemove);
  btnLike.addEventListener('click', handleLike);
  cardImage.addEventListener('click', () => hendleOpenImg(data));

  return card;
};


function addProfileInfo() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
};

//функция открытие закрытие попапа
function togglePopup(p) {
  p.classList.toggle('popup_opened');
};

// функция сброса форм
function resetForm(form) {
  form.reset();
};

// Обработчик формы Profail
function handleFormSubmit(evt) {
  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;

  root.removeEventListener('keydown',  closePopupESC);
};

//Закрытие popup ESC
function closePopupESC(evt) {
  const popupAction = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    togglePopup(popupAction);
    popup.removeEventListener('keydown',  closePopupESC);
  }
};


document.addEventListener('click', (evt) => {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.target.classList.contains('popup')) {
    togglePopup(activePopup);
  };
});

btnOpenPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  addProfileInfo();
  root.addEventListener('keydown',  closePopupESC);
});

btnExitPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  root.removeEventListener('keydown',  closePopupESC);
  resetForm(formProfile);
});

btnSavePopupProfile.addEventListener('click', (e) => {
  handleFormSubmit(e);
  togglePopup(popupProfile);
});

btnOpenPopupCard.addEventListener('click', () => {

  togglePopup(popupCard);
  root.addEventListener('keydown',  closePopupESC);
});

btnExitPopupCard.addEventListener('click', () => {
  togglePopup(popupCard);
  root.removeEventListener('keydown',  closePopupESC);
  resetForm(formCard);
});

btnExitPopupImg.addEventListener('click', () => {
  togglePopup(popupImg);
  popup.removeEventListener('keydown',  closePopupESC);
});

formCard.addEventListener('submit', addHandlers);
formProfile.addEventListener('submit', handleFormSubmit);
renderCard();






