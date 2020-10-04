console.log('louding js');

//Кнопки и модальное окно
const popup = document.querySelector('.popup');
const ButtonOpenPopup = document.querySelector('.profile__edit-button');
const ButtonSavePopup = document.querySelector('.form__btn-save');
const ButtonClosePopup = document.querySelector('.form__btn-exit');

//Фрма
const formProfile = document.querySelector('.form__profile');
const formName = formProfile.querySelector('.form__name');
const formStatus = formProfile.querySelector('.form__status');

//Данные для формы
const name = document.querySelector('.profile__name').textContent;
const status = document.querySelector('.profile__status').textContent;

//открытие закрытие попапа
function OpenPopuo() {
  const PopupToggle = () => {
    popup.classList.toggle('popup_opened')
  }

  ButtonOpenPopup.addEventListener('click', PopupToggle);
  ButtonClosePopup.addEventListener('click', PopupToggle);
  ButtonSavePopup.addEventListener('click', PopupToggle); //Временная конструкция
}
OpenPopuo();

// вставка дданных в попап
function addPopup() {
  formName.value = name;
  formStatus.value = status;
}
addPopup();


