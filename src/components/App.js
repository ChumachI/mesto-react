import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import React, {useState} from 'react';



import '../index.css';


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(false);

    function handleEditAvatarClick(){
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    function handleEditProfileClick(){
        setEditProfilePopupOpen(!isEditProfilePopupOpen);
        
    }
    function handleAddPlaceClick(){
        setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
    function handleCardClick(card){
        setSelectedCard({...card, isOpen : true})
    }
    function closeAllPopups(){
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard({...selectedCard, isOpen : false});
    }

  return (
<div className = "page">

<Header/>
<Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} onCardClick ={handleCardClick}/>
<Footer/>

<PopupWithForm name = 'avatar-edit' title = 'Обновить аватар' isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups}>
        <div className = "popup__input-container">
            <input className = "popup__field" id = "popup__avatar-link" type = "url" name = "link" placeholder="Ссылка на картинку" required/>
            <span className="popup__field-error popup__avatar-link-error"></span>
        </div>
        <button className = "popup__save popup__save_disabled" type = "submit" form="edit-avatar__form" disabled>Сохранить</button>
</PopupWithForm>

<PopupWithForm name = 'profile-edit' title = 'Редактировать профиль' isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups}>
    <div className = "popup__input-container">
        <input className = "popup__field popup__field_for_name" id = "popup__name" name = "name" type="text" minLength="2" maxLength="40" required noValidate placeholder=""/>
        <span className="popup__field-error popup__name-error"></span>
   </div>
    <div className = "popup__input-container">
        <input className = "popup__field popup__field_for_status" id = "popup__status" name = "status" type="text" minLength="2" maxLength="200" required noValidate placeholder=""/>
        <span className="popup__field-error popup__status-error"></span>
    </div>
    <button className = "popup__save" type = "submit" form="popup__form-edit">Сохранить</button>
</PopupWithForm>


<PopupWithForm name = 'image-add' title = 'Новое место' isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}>
    <div className = "popup__input-container">
        <input className = "popup__field" id = "popup__place-name" type = "text" name = "name" placeholder="Название" required minLength="2" maxLength="30"/>
        <span className="popup__field-error popup__place-name-error"></span>
    </div>
    <div className = "popup__input-container">
        <input className = "popup__field" id = "popup__place-link" type = "url" name = "link" placeholder="Ссылка на картинку" required/>
        <span className="popup__field-error popup__place-link-error"></span>
    </div>
    <button className = "popup__save popup__save_disabled" type = "submit" form="add-popup__form" disabled>Создать</button>
</PopupWithForm>

<ImagePopup card = {selectedCard} onClose = {closeAllPopups}/>
</div>
  );
}

export default App;