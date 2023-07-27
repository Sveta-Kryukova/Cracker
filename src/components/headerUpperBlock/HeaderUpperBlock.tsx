export const HeaderUpperBlock = () => {
  return (
    <div className="header-upper-block">
      <img className="header-upper-block__logo" src="/images/logo.png" alt="logo" />

      <div className="header-upper-block__menu">
          <div className="header-upper-blockr__menu__cart-icon"></div>
          <h3 className="header-upper-block__menu__cart">total:</h3>
          <button className="header-upper-block__menu__cart-button">details</button>
      </div>
    </div>
  )
}