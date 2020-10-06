//Кнопки и модальное окно
const popup = document.querySelector('.popup');
const ButtonOpenPopup = document.querySelector('.profile__edit-button');
const ButtonClosePopup = document.querySelector('.form__btn-exit');
const ButtonSavePopup = document.querySelector('.form__btn-save');

//Фрма
const form = document.querySelector('.form');
const formName = form.querySelector('.form__name');
const formStatus = form.querySelector('.form__status');

//Данные для формы
let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');

//открытие закрытие попапа
function OpenPopuo() {
  const PopupToggle = () => {
    popup.classList.toggle('popup_opened')
  }

  ButtonOpenPopup.addEventListener('click', PopupToggle);
  ButtonClosePopup.addEventListener('click', PopupToggle);
  ButtonSavePopup.addEventListener('click', PopupToggle);
}

OpenPopuo();

// вставка дданных в попап
function addPopup() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
}
addPopup();

function formSubmitHandler(evt) {

  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;
}
form.addEventListener('submit', formSubmitHandler);
