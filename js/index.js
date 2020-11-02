//Клонирует 6ть карточек из коробки
const renderCards = () => {
  const items = initialCards.map(element => getItem(element));

  photoCard.append(...items);
};

// Создание new карточкек
const handleAddCard = (e) => {
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
const handleOpenImg = (data) => {
  imgEl.src = data.link;
  imgEl.alt = data.name;
  textEl.textContent = data.name;

  togglePopup(popupImg);
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
  cardImage.addEventListener('click', () => handleOpenImg(data));

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

  togglePopup(popupProfile);
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
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__btn-exit')) {
      togglePopup(popup);
    };
  });
});

//Обработчик кнопки открытия PROFAILE
btnOpenPopupProfile.addEventListener('click', () => {
  togglePopup(popupProfile);
  addProfileInfo();
});

//Обработчик кнопки открытия CARD
btnOpenPopupCard.addEventListener('click', () => {
  togglePopup(popupCard);
});

//Обработчика запускающиеся при загрузке страницы
formCard.addEventListener('submit', handleAddCard);
formProfile.addEventListener('submit', handleFormSubmit);
renderCards();
