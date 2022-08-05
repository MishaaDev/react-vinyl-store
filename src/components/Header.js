function Header() {
  return (
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
  );
}

export default Header;