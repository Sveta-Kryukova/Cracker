import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './types'; 
import { CartItem } from '../../types';

import { v4 as uuidv4 } from 'uuid';

const initialState: RootState = {
  cartItems: [],
  packageInfo: {
    small: { weight: 0.50, price: 28.50 },
    medium: { weight: 0.66, price: 33.00 },
    large: { weight: 1.50, price: 81.50 },
  },
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: RootState,
      action: PayloadAction<CartItem>
    ) => {
      const { id, value1, value2, value3, value4, selectedPackSize } = action.payload;
      const newItem: CartItem = {
        id: id || uuidv4(),
        value1,
        value2,
        value3,
        value4,
        selectedPackSize,
        weight: state.packageInfo[selectedPackSize].weight,
        price: state.packageInfo[selectedPackSize]?.price,
      };
      state.cartItems.push(newItem);
      state.totalPrice += state.packageInfo[selectedPackSize]?.price ?? 0;
    },
    
    deleteFromCart: (
      state: RootState,
      action: PayloadAction<string>
    ) => {
      const deletedItemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== deletedItemId);
      const deletedItem = state.cartItems.find(item => item.id === deletedItemId);
      if (deletedItem) {
        state.totalPrice -= deletedItem.price ?? 0;
      }
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
