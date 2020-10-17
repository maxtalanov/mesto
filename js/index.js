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

//открытие закрытие попапа
const popupToggle = (popup) => {
  popup.classList.toggle('popup_opened');
}
buttonOpenPopup.addEventListener('click', () => popupToggle(popupProfile));
buttonClosePopup.addEventListener('click', () => popupToggle(popupProfile));
buttonOpenPopupCard.addEventListener('click', () => popupToggle(popupCard));
buttonClosePopup.addEventListener('click', () => popupToggle(popupCard));
// buttonClosePopup.addEventListener('click', [popupProfile, popupCard, popupImg].forEach = (element) => (element.classList.remove('popup_opened'));
//Логика делаем масив из констант. По клику на кнопку у элемента из масива должен быть удален class popup_opened;
// buttonSavePopup.addEventListener('click', popupToggle);



//вставка дданных в попап
function addPopup() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
}
buttonOpenPopup.addEventListener('click', addPopup);

// Обработчик формы
function formSubmitHandler(evt) {

  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;
}
form.addEventListener('submit', formSubmitHandler);
