function Card(props){

    function handleClick() {
        props.onCardClick(props);
      }  

    return (
        <div className = "place">
        <button className = "place__delete place__delete_active"  type="button"></button>
        <img  className = "place__image" src={props.link} onClick = {handleClick} alt={props.name}/>
        <div className = "place__bottom">
            <h2 className = "place__name">{props.name}</h2>
            <div className = "place__like-container">
                <button className = "place__like"  type="button"></button>
                <label className = "place__like-counter">{props.likes.length}</label>
            </div>
        </div>
    </div>
    )
}

export default Card;