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
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {
    root.addEventListener('keydown',  closePopupESC);
  }
  root.removeEventListener('keydown',  closePopupESC);
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
};

//Закрытие popup ESC
function closePopupESC(evt) {
  const popupAction = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    togglePopup(popupAction);
  }
};

//Закрытие по Оверлею
popups.forEach((popup) => {
  popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
      togglePopup(popup);
    };
  });
});

//Обработчик кнопки открытия PROFAILE
btnOpenPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  addProfileInfo();
  root.addEventListener('keydown',  closePopupESC);
});

//Обработчик кнопки открытия CARD
btnOpenPopupCard.addEventListener('click', () => {

  togglePopup(popupCard);
  root.addEventListener('keydown',  closePopupESC);
});

// Обработчик кнопки закрытия PROFAILE
btnExitPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  resetForm(formProfile);
});

// Обработчик кнопки закрытия CARD
btnExitPopupCard.addEventListener('click', () => {
  togglePopup(popupCard);
  resetForm(formCard);
});

// Обработчик кнопки закрытия IMG
btnExitPopupImg.addEventListener('click', () => {
  togglePopup(popupImg);
});

//Обработчика запускающиеся при загрузке страницы
formCard.addEventListener('submit', addHandlers);
formProfile.addEventListener('submit', handleFormSubmit);
renderCard();






