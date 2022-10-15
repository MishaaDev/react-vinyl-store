import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const array = [
  {
    artistName: "Pink Floyd",
    albumName: "Wish You Were Here",
    price: 4063,
    imadeUrl: "/img/items/pink-floyd-wish-you-were-here.jpg",
  },
  {
    artistName: "Adele",
    albumName: "21",
    price: 3512,
    imadeUrl: "/img/items/adele-21.jpeg",
  },
  {
    artistName: "Michael Jackson",
    albumName: "Bad",
    price: 2632,
    imadeUrl: "/img/items/michael-jackson-bad.jpeg",
  },
  {
    artistName: "Abba",
    albumName: "Gold",
    price: 5458,
    imadeUrl: "/img/items/abba-gold.jpeg",
  },
  {
    artistName: "Pink Floyd",
    albumName: "Dark Side Of The Moon",
    price: 3636,
    imadeUrl: "/img/items/pink-floyd-dark-side-of-the-moon.jpeg",
  },
  {
    artistName: "Linkin Park",
    albumName: "Hybrid Theory (20th Anniversary Edition)",
    price: 19990,
    imadeUrl:
      "/img/items/linkin-park-hybrid-theory-20th-anniversary-edition.jpeg",
  },
];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://633ee2360dbc3309f3c01a63.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
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
          {items.map((obj) => (
            <Card
              artistName={obj.artistName}
              albumName={obj.albumName}
              price={obj.price}
              imageUrl={obj.imadeUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
