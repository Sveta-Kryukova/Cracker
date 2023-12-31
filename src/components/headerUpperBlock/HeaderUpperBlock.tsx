import { useState } from 'react';
import { Cart } from '../cart';
import { useTypedSelector } from '../../store';
import classNames from 'classnames'; 

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
    }
      return (
        <div className="header-upper-block__menu__cart-icon"></div>
      );
  };

  return (
    <div className="header-upper-block">
      <image className="header-upper-block__logo" />

      <div className="header-upper-block__menu">
        {renderCartIcon()}
        <h3 className="header-upper-block__menu__cart">total: {totalPrice.toFixed(2)}&#8364;</h3>
        <button
          className={classNames('header-upper-block__menu__cart-button', { 'rotate': showCart })}
          onClick={handleShowCart}
        >
          details
        </button>
        {showCart && <Cart onClose={handleShowCart}/>}
      </div>
    </div>
  );
};
