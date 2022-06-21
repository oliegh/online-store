import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999
  }
]

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />

      <Header/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кросcовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {
            arr.map((item) => {
              
            })
          }
          


          {/* <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
