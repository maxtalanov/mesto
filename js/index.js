const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Кнопки и модальное окно
const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.form__btn-exit');
const buttonSavePopup = document.querySelector('.form__btn-save');

// Шаблон карты
const template = document.querySelector('.template-card');
//Фрма
const form = document.querySelector('.form');
const formName = form.querySelector('.form__name');
const formStatus = form.querySelector('.form__status');

//Данные для формы
let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');

const photoCard = document.querySelector('.photo-card');

// Шаблон  template времееный
const renderTest = () => {
  const item = initialCards.map(element => {
    return `
    <figure class="card">
  const item = initialCards.map(element => {
      <img class="card__img" src="${element.link}" alt="">
      <figcaption class="card__bottom">
        <div class="card__text">
          <p class="card__title">${element.name}</p>
          <button class="card__btn-like hover-opacity" type="button"></button>
        </div>
      </figcaption>
    </figure>`;
  }).join('');

  photoCard.insertAdjacentHTML("afterbegin", item);
}
renderTest();

const getItem = (data) => {

}

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
