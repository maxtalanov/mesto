//Кнопки и модальное окно
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const popupImg = document.querySelector('.popup_type_img');

const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.form__btn-exit');
const buttonSavePopup = document.querySelector('.form__btn-save');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');
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

// buttonClosePopup.addEventListener('click', () => popupToggle(popupCard));
// buttonClosePopup.addEventListener('click', [popupProfile, popupCard, popupImg].forEach = (element) => (element.classList.remove('popup_opened'));
//Логика делаем масив из констант. По клику на кнопку у элемента из масива должен быть удален class popup_opened;
// buttonSavePopup.addEventListener('click', popupToggle);
//вставка дданных в попап

function addPopup() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
}

//открытие закрытие попапа
function popupToggle(p) {
  p.classList.toggle('popup_opened');
}

// Обработчик формы
function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;
}

buttonOpenPopup.addEventListener('click', () => {
  popupToggle(popup);
  addPopup();
});

buttonClosePopup.addEventListener('click', () => {
  popupToggle(popup);
});

buttonSavePopup.addEventListener('click', (e) => {
  formSubmitHandler(e);
  popupToggle(popup);
});


form.addEventListener('submit', formSubmitHandler);



