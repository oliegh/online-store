

export const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="headerRight d-flex">
        <li className="mr-30">
          <img className="mr-15" width={18} height={18} src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img className="mr-15" width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  )
}