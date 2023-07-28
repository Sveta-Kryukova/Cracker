import { Dispatch, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../types'; 
import { cartSlice } from './cart';

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<Dispatch>();
