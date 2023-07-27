// import { Cart } from "../cart"
import { HeaderUpperBlock } from "../headerUpperBlock"
import { Navigation } from "../navigation"

export const Header = () => {
  return (
    <div className="header">
      <HeaderUpperBlock />
      {/* <Cart /> */}
      <Navigation />
      <div className="header__container">
        <div className="header__container__left-block">
          <p className="header__container__left-block__text">
            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <h1 className="header__container__title">
          mostly tastes with freshes
        </h1>

        <button className="header__container__button">taste it</button>
      </div>
    </div>

  )
}