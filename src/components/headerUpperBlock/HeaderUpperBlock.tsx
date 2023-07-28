import { useState } from 'react';
import { Cart } from '../cart';
import { useTypedSelector } from '../../store';

export const HeaderUpperBlock = () => {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useTypedSelector((state) => state.cartItems);
  const totalPrice = useTypedSelector((state) => state.totalPrice);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const renderCartIcon = () => {
    if (cartItems.length > 0) {
      return (
        <div className="header-upper-block__menu__cart-icon--with-items">
          <span className="header-upper-block__menu__cart-icon__item-count">{cartItems.length}</span>
        </div>
      );
    } else {
      return (
        <div className="header-upper-block__menu__cart-icon"></div>
      );
    }
  };

  return (
    <div className="header-upper-block">
      <img className="header-upper-block__logo" src="/images/logo.png" alt="logo" />

      <div className="header-upper-block__menu">
        {renderCartIcon()}
        <h3 className="header-upper-block__menu__cart">total: {totalPrice.toFixed(2)}&#8364;</h3>
        <button
          className={`header-upper-block__menu__cart-button ${showCart ? 'rotate' : ''}`}
          onClick={handleShowCart}
        >
          details
        </button>
        {showCart && <Cart />}
      </div>
    </div>
  );
};
