import React from 'react';
import { Link } from 'react-scroll';

export const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list__item">
          <Link to="home" smooth={true} duration={500}>home</Link>
        </li>
        <li className="navigation__list__item">
          <Link to="about-us" smooth={true} duration={500}>about us</Link>
        </li>
        <li className="navigation__list__item">
          <Link to="footer" smooth={true} duration={500}>contact us</Link>
        </li>
        <li className="navigation__list__item">
          <Link to="checkout" smooth={true} duration={500}>checkout</Link>
        </li>
        <li className="navigation__list__item">
          <Link to="account" smooth={true} duration={500}>account</Link>
        </li>
      </ul>
    </div>
  );
};
