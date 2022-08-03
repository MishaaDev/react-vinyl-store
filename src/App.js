function App() {
  return (
    <div className="wrapper clear">
      <div style={{display: "none"}} className="drawer_box">
        <div className="drawer">
          <h2>Корзина</h2>
          <div className="items">
            <div className="cart_item_box">
              <div className="cart_item">
              <img className="item_photo" width={70} height={70} src="/img/items/pink-floyd-wish-you-were-here.jpg" alt="cover" />
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
              <img className="item_photo" width={70} height={70} src="/img/items/pink-floyd-wish-you-were-here.jpg" alt="cover" />
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
      <header>
        <div className="header_left">
          <img width={50} height={50} src="/img/logo.svg" alt="logo" />
          <div className="header_logo_text">
            <h2>React Vinyl Store</h2>
            <p>Магазин виниловых пластинок</p>
          </div>
        </div>
        <ul className="header_right">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
            <span>1300 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="content_header">
          <h1>Все пластинки</h1>
          <div className="search_block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="items">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart0.svg" alt="Unliked" />
            </div>
            <img className="card_cover" src="/img/items/pink-floyd-wish-you-were-here.jpg" alt="cover" />
            <div className="card_content">
              <div className="card_name">
                <h4>Pink Floyd</h4>
                <h5>Wish You Were Here</h5>
              </div>
              <div className="card_bottom">
                <div className="card_price">
                  <span>Цена:</span>
                  <b>2 394 руб.</b>
                </div>
                <button>
                  <img width={11} height={11} src="/img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
          </div>
     
        </div>
      </div>
    </div>
  );
}

export default App;
