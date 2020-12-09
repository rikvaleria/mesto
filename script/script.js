let popup = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__btn-edit');
let buttonClose = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let openForm = document.querySelector('.popup__form');
let titleField = document.querySelector('.popup__input_type_name');
let subtitleField = document.querySelector('.popup__input_type_job');

function openPopup() {
    titleField.value = profileTitle.textContent;
    subtitleField.value = profileSubtitle.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function submitForm(event) {
    event.preventDefault();
    profileTitle.textContent = titleField.value;
    profileSubtitle.textContent =subtitleField.value;
    closePopup ()
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
openForm.addEventListener('submit', submitForm);