function Card(props) {
  const onClickButton = () => {
    alert("hi");
    copyPageUrl();
  };
  async function copyPageUrl() {
    try {
      await navigator.clipboard.writeText("srtst");
      console.log("URL страницы скопирован в буфер обмена");
    } catch (err) {
      console.error("Не удалось скопировать: ", err);
    }
  }
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
          <button onClick={() => onClickButton()}>
            <img width={11} height={11} src="/img/plus.svg" alt="plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
