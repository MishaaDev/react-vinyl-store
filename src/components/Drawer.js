function Drawer() {
  return (
    <div style={{ display: "none" }} className="drawer_box">
      <div className="drawer">
        <div className="header">
          <h2>Корзина</h2>
          <img
            className="drawer_close"
            src="/img/cross.svg"
            alt="Drawer close"
          />
        </div>
        <div className="items">
          <div className="cart_item_box">
            <div className="cart_item">
              <img
                className="item_photo"
                width={70}
                height={70}
                src="/img/items/pink-floyd-wish-you-were-here.jpg"
                alt="cover"
              />
              <div>
                <div className="item_name">
                  <p>Pink Floyd</p>
                  <p>Wish You Were Here</p>
                </div>
                <b>2 394 руб.</b>
              </div>
            </div>
            <img className="remove_btn" src="/img/delete1.svg" alt="Remove" />
          </div>
          <div className="cart_item_box">
            <div className="cart_item">
              <img
                className="item_photo"
                width={70}
                height={70}
                src="/img/items/pink-floyd-wish-you-were-here.jpg"
                alt="cover"
              />
              <div>
                <div className="item_name">
                  <p>Pink Floyd</p>
                  <p>Wish You Were Here</p>
                </div>
                <b>2 394 руб.</b>
              </div>
            </div>
            <img className="remove_btn" src="/img/delete1.svg" alt="Remove" />
          </div>
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
