import { createSlice, PayloadAction, configureStore, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './types'; 

const initialState: RootState = {
  cartItems: [],
  packageInfo: {
    small: { weight: 0.50, price: 28.50 },
    medium: { weight: 0.66, price: 33.00 },
    large: { weight: 1.50, price: 81.50 },
  },
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: RootState,
      action: PayloadAction<{
        value1: string;
        value2: string;
        value3: string;
        value4: string;
        selectedPackSize: string;
      }>
    ) => {
      const { value1, value2, value3, value4, selectedPackSize } = action.payload;
      const newItem = {
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
      action: PayloadAction<number>
    ) => {
      const deletedItem = state.cartItems[action.payload];
      if (deletedItem) {
        state.totalPrice -= deletedItem.price ?? 0;
        state.cartItems.splice(action.payload, 1);
      }
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<Dispatch>();
