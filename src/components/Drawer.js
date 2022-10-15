function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="drawer_box">
      <div className="drawer">
        <div className="header">
          <h2>Корзина</h2>
          <img
            onClick={onClose}
            className="drawer_close"
            src="/img/cross.svg"
            alt="Drawer close"
          />
        </div>
        <div className="items">
          {items.map((obj) => (
            <div className="cart_item_box">
              <div className="cart_item">
                <img
                  className="item_photo"
                  width={70}
                  height={70}
                  src={obj.imadeUrl}
                  alt="cover"
                />
                <div>
                  <div className="item_name">
                    <p>{obj.artistName}</p>
                    <p>{obj.albumName}</p>
                  </div>
                  <b>{obj.price} руб.</b>
                </div>
              </div>
              <img
                onClick={() => onRemove(obj.id)}
                className="remove_btn"
                src="/img/delete1.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>

        <ul className="cart_price">
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 343 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1 200 руб.</b>
          </li>
        </ul>
        <button className="green_button">
          Оформить заказ
          <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Drawer;
