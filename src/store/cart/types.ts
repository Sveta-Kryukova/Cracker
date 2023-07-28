import { CartItem } from "../../types";

export interface RootState {
  cartItems: CartItem[];
  packageInfo: {
    [key: string]: { weight: number; price: number };
  };
  totalPrice: number;
}