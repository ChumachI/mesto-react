import React from "react";


function PopupWithForm(props) {
    return (
        <div className = {`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`} >
            <div className = "popup__container" >
            <button className = "popup__close"  type="button" onClick={props.onClose}></button>
            <h3 className = "popup__header">{props.title}</h3>
            <form className = "popup__form" id = {`popup__form-${props.name}`} name = {`popup__form-${props.name}`}>
                {props.children}
            </form>
            </div>
        </div>

    );
}

export default PopupWithForm;
