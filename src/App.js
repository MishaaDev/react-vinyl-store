function App() {
  return (
    <div className="wrapper clear">
      <header>
        <div className="header_left">
          <img width={40} height={40} src="/img/logo.svg" />
          <div className="header_logo_text">
            <h2>React Vinyl Store</h2>
            <p>Магазин виниловых пластинок</p>
          </div>
        </div>
        <ul className="header_right">
          <li>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1300 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все пластинки</h1>
        <div className="items">
        <div className="card">
          <img width={150} height={150} src="/img/items/pink-floyd-wish-you-were-here.jpg" alt="cover" />
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
              <img width={25} height={25} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={150} height={150} src="/img/items/pink-floyd-wish-you-were-here.jpg" alt="cover" />
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
              <img width={25} height={25} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={150} height={150} src="/img/items/pink-floyd-wish-you-were-here.jpg" alt="cover" />
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
              <img width={25} height={25} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={150} height={150} src="/img/items/pink-floyd-wish-you-were-here.jpg" alt="cover" />
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
              <img width={25} height={25} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
