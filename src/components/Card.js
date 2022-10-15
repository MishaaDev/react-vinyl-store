import React from "react";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart0.svg" alt="Unliked" />
      </div>
      <img className="card_cover" src={props.imageUrl} alt="cover" />
      <div className="card_content">
        <div className="card_name">
          <h4>{props.artistName}</h4>
          <h5>{props.albumName}</h5>
        </div>
        <div className="card_bottom">
          <div className="card_price">
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
          <img
            className="card_plus"
            onClick={onClickPlus}
            src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}
            alt="plus"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
