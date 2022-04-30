import { api } from "../utils/Api.js";
import React from "react";
import editPenImg from '../images/pen.svg'
import Card from './Card.js'

function Main(props) {
    const onEditProfile = props.onEditProfile;
    const onAddPlace = props.onAddPlace;
    const onEditAvatar = props.onEditAvatar;
    const onCardClick = props.onCardClick;
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    
    api.getUserInfo()
    .then((userInfo)=>{
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
    });

    api.getInitialCards()
    .then((cardsArray)=>{
        setCards(cardsArray);
    })
    

    return(
    <main className = "content">
        <section className = "profile">
            <div className = "profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
                <div className = "profile__avatar-overlay" onClick={onEditAvatar}>
                    <img className = "profile__avatar-edit-icon" src={editPenImg} alt="аватар" />
                </div>
            </div>
            <div className = "profile__info">
                <div className = "profile__name-and-edit-button">
                    <h1 className = "profile__name">{userName}</h1>
                    <button className = "profile__edit-button" type="button" onClick={onEditProfile}></button>
                </div>
                <p className = "profile__status">{userDescription}</p>
            </div>
            <button  className = "profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>  
        <section className = "places" >
            {cards.map(card => {
                return <Card key = {card._id} name = {card.name} link = {card.link} likes = {card.likes}  onCardClick = {onCardClick}/>;
            })}
        </section>
</main>
    ) 
}



export default Main;