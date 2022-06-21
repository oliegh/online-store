

export const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/not-liked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
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
  )
}