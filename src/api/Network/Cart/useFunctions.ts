import R from '@assets/R';
import { useAppSelector } from '@redux/hooks';
import { ToastRef } from '@utils/ToastUtils';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import reactotron from 'reactotron-react-native';
import { useImmer } from 'use-immer';
import { requestAddToCart, requestGetCart } from '../MarketApi';
import { CartResponse, CartRoot } from './CartGeneric';
import { getCart, onDecrease, onIncrease, onRemove } from './CartSlice';
const MAX_PRODUCT = 1;
export const useFunctions = () => {
  const cartState = useAppSelector(state => state.cartSlice);
  const dispatch = useDispatch();
  const getTotalPrice = () => {
    if (!cartState.cart.length) return 0;
    return cartState.cart
      .filter(item => item.number > 0)
      .map(item => parseInt(item.product.price) * item.number)
      .reduce((total, currentValue) => {
        return total + currentValue;
      }, 0);
  };
  const addToCart = async (
    productId: number,
    index: number,
    isRemove: boolean,
  ) => {
    try {
      const res = await requestAddToCart(productId, isRemove ? 0 : MAX_PRODUCT);
      if (isRemove) dispatch(onRemove(index));
      else {
        ToastRef.show(R.strings().added_to_cart);
        dispatch(onIncrease(index));
      }
    } catch (error) {}
  };
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return { getTotalPrice, cartState, addToCart };
};
