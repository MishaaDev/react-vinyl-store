import React from "react";

function Card({ imageUrl, artistName, albumName, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus();
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart0.svg" alt="Unliked" />
      </div>
      <img className="card_cover" src={imageUrl} alt="cover" />
      <div className="card_content">
        <div className="card_name">
          <h4>{artistName}</h4>
          <h5>{albumName}</h5>
        </div>
        <div className="card_bottom">
          <div className="card_price">
            <span>Цена:</span>
            <b>{price} руб.</b>
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
