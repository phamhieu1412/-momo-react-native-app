import { CartState, DashboardState, PlaceState } from '@redux/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DashboardRoot } from '@screens/Child/ChildGeneric';
import { APP_SLICE } from '@types';
import reactotron from 'reactotron-react-native';
import { requestGetCart } from '../MarketApi';
import { CartRoot } from './CartGeneric';

const initialState = {
  isLoading: false,
  error: null,
  isLoadMore: false,
  isLastPage: false,
  cart: [],
} as CartState;
export const getCart = createAsyncThunk('parent/cart', async () => {
  const response: CartRoot = await requestGetCart();
  return response.data;
});
const cartSlice = createSlice({
  name: APP_SLICE.CART,
  initialState,
  reducers: {
    onIncrease: (state, action) => {
      state.cart[action.payload].number++;
    },
    onDecrease: (state, action) => {
      if (state.cart[action.payload].number > 0)
        state.cart[action.payload].number--;
    },
    onRemove: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    updateCart: (state, action) => {
      const foundIndex = state.cart.findIndex(
        item => item.id === action.payload.id,
      );
      reactotron.log!(foundIndex,action.payload.id,'found')
      if (foundIndex != -1)
        state.cart[foundIndex].number += action.payload.number;
      else state.cart.unshift(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getCart.pending, (state, action) => {
      state.isLoading = true;
      state.isLastPage = false;
      state.error = null;
      return state;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoadMore = false;
      state.cart = action.payload.order;
      return state;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoadMore = false;
      state.isLastPage = false;
      state.error = action.payload;
      return state;
    });
  },
});

export const { onIncrease, onDecrease, onRemove,updateCart } = cartSlice.actions;
export default cartSlice.reducer;
