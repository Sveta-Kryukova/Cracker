type CartButtonProps = {
  onClick: () => void;
};

export const CartButton:React.FC<CartButtonProps> = ({onClick}) => {
  return (
      <button 
        className="cart-button" 
        onClick={onClick}
      >
        add to cart +
      </button>
  )
}