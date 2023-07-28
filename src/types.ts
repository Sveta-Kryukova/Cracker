export interface CartItem {
  id: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  selectedPackSize: string;
  weight: number;
  price: number;
}

export interface RootState {
  cartItems: CartItem[];
  packageInfo: {
    [key: string]: { weight: number; price: number };
  };
  totalPrice: number;
}

