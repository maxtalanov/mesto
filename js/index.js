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

//открытие закрытие попапа
function popupToggle() {
  popup.classList.toggle('popup_opened');
}
buttonOpenPopup.addEventListener('click', popupToggle);
buttonClosePopup.addEventListener('click', popupToggle);
buttonSavePopup.addEventListener('click', popupToggle);


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
