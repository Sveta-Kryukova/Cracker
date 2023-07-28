import React from 'react';
import { useTypedSelector, useAppDispatch } from '../../store';
import { deleteFromCart } from '../../store';

export const Cart = () => {
  const cartItems = useTypedSelector((state) => state.cartItems);
  const packageInfo = useTypedSelector((state) => state.packageInfo);
  const dispatch = useAppDispatch();

  const handleDelete = (index: number) => {
    dispatch(deleteFromCart(index));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const packageData = packageInfo[item.selectedPackSize];
      if (packageData) {
        total += packageData.price ?? 0;
      }
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <div className="cart__icons">
        <div className="cart__icons__icon--1"></div>
        <div className="cart__icons__icon--2"></div>
        <div className="cart__icons__icon--3"></div>
        <div className="cart__icons__icon--4"></div>
      </div>
      <div className="cart__list">
        {cartItems.map((item, index) => (
          <div className="cart__list__item" key={index}>
            <div className="cart__list__item__icon"></div>
            <span className="cart__list__item__component">{item.value1}%</span>
            <span className="cart__list__item__component">{item.value2}%</span>
            <span className="cart__list__item__component">{item.value3}%</span>
            <span className="cart__list__item__component">{item.value4}%</span>
            <span className="cart__list__item__weight">
              {(packageInfo[item.selectedPackSize]?.weight ?? 0).toFixed(2)} kg
            </span>
            <span className="cart__list__item__cost">
              {(packageInfo[item.selectedPackSize]?.price ?? 0).toFixed(2)} &#8364;
            </span>
            <button className="cart__list__item__delete-button" onClick={() => handleDelete(index)}>
              +
            </button>
          </div>
        ))}
      </div>
      <div className="cart__total">
        <span className="cart__total__text">Total: {calculateTotalPrice()}&#8364;</span>
        <button className="cart__total__button">checkout</button>
      </div>
    </div>
  );
};
