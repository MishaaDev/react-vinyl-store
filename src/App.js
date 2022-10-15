import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://633ee2360dbc3309f3c01a63.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://633ee2360dbc3309f3c01a63.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (item) => {
    axios.post("https://633ee2360dbc3309f3c01a63.mockapi.io/cart", item);
    setCartItems((prev) => [...prev, item]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://633ee2360dbc3309f3c01a63.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className="content_header">
          <h1>Все пластинки</h1>
          <div className="search_block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="items">
          {items.map((item, index) => (
            <Card
              key={index}
              artistName={item.artistName}
              albumName={item.albumName}
              price={item.price}
              imageUrl={item.imadeUrl}
              onPlus={() => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
