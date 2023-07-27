export const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__icons">
        <div className="cart__icons__icon--1"></div>
        <div className="cart__icons__icon--2"></div>
        <div className="cart__icons__icon--3"></div>
        <div className="cart__icons__icon--4"></div>
      </div>
      <div className="cart__list">
        <div className="cart__list__item">
        <div className="cart__list__item__icon"></div>
        <span className="cart__list__item__component">4%</span>
        <span className="cart__list__item__component">15%</span>
        <span className="cart__list__item__component">61%</span>
        <span className="cart__list__item__component">20%</span>
        <span className="cart__list__item__weight">1.50 kg</span>
        <span className="cart__list__item__cost">81.50 E</span>
        <button className="cart__list__item__delete-button">+</button>

        </div>
      </div>
      <div className="cart__total">
        <span className="cart__total__text">Total: 143E</span>
        <button className="cart__total__button">checkout</button>
        </div>
    </div>
  )
}