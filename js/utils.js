import { root, popups } from  './const.js';

// функция открытие закрытие попапа
export function togglePopup(popup) {
  popup.classList.toggle('popup_opened');

  if (popup.classList.contains('popup_opened')) {
    root.addEventListener('keydown',  closePopupESC);
  } else {
    root.removeEventListener('keydown',  closePopupESC);
  }
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

// функция сброса форм
export function resetForm(form) {
  form.reset();
};
