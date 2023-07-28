import { HeaderUpperBlock } from '../headerUpperBlock';
import { Navigation } from '../navigation';
import { Link } from 'react-scroll';

export const Header = () => {
    return(
    <div className="header">
      <HeaderUpperBlock />
      <Navigation />
      <div className="header__container">
        <div className="header__container__left-block">
          <p className="header__container__left-block__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <h1 className="header__container__title">
          mostly tastes with freshes
        </h1>

        <Link
          to="cracker-constructor"
          smooth={true}
          duration={500}
          offset={-100}
          className="header__container__button"
        >
          taste it
        </Link>
      </div>
    </div>
    );
};
