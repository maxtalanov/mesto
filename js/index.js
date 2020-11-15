import { Card } from './card.js';
import { togglePopup, resetForm } from './utils.js';
import { FormValidator } from './FormValidator.js';

//Валидатор для форм
const formValidator = new FormValidator(
  '.form',
  '.form__input',
  '.form__btn-input',
  'form__btn-input_state_blocked',
  'form__input_state_invalid',
  'error'
);

// Создание новой карточки
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

//Клонирует 6ть карточек из коробки
const renderCards = () => {
  const items = initialCards.map(element => getItem(element));

  photoCard.append(...items);
};

//Распоковка объекта для рендра
const getItem = (data) => {
  const listCards = new Card(data.name, data.link, '.template-card');

  return listCards.render();
}

function addProfileInfo() {
  formName.value = name.textContent;
  formStatus.value = status.textContent;
};

// Обработчик формы Profail
function handleFormSubmit(evt) {
  evt.preventDefault();

  name.textContent = formName.value;
  status.textContent = formStatus.value;

  togglePopup(popupProfile);
};

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
formValidator.enableValidation();
renderCards();

