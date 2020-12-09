let popup = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__btn-edit');
let buttonClose = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let openForm = document.querySelector('.popup__form');
let titleField = document.querySelector('.popup__input_type_name');
let subtitleField = document.querySelector('.popup__input_type_job');

function openPopup() {
    popup.classList.add('popup_opened');
    titleField.value = profileTitle.textContent;
    subtitleField.value = profileSubtitle.textContent;
}
/* а здесь не совсем поняла "Форму лучше показать пользователю уже после заполнения полей".
* как это реализовать? поменять порядок в функции?  popup.classList.add('popup_opened') вызвать в конце? */

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
/* если я верно поняла ваш комментарий по submit, то для того, чтобы форма
* после заполнения закрывалась по нажатию  enter нужно было поменять кнопке "сохранить" тип кнопки
* с "button" на "submit", да? (я так и сделала, но вдруг вы имели ввиду другое решение :) */
