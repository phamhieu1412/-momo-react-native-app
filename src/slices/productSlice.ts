import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '../types';
import {ApiClient} from '../api/ApiService';

const initialState = {
  isLoading: false,
  error: null,
  isLoadMore: false,
  isLastPage: false,
  cart: [],
};

export const getSlides = createAsyncThunk('product', async () => {
  const response = await ApiClient.get('/products');
  console.log('xxx getCart response', response);
  return response.data;
});

const cartSlice = createSlice({
  name: APP_SLICE.PRODUCT,
  initialState,
  reducers: {
    onIncrease: (state, action) => {
      console.log('xxx onIncrease', state, action);
      // state.cart[action.payload].number++;
    },
    onDecrease: (state, action) => {
      // if (state.cart[action.payload].number > 0)
      //   state.cart[action.payload].number--;
      console.log('xxx onDecrease', state, action);
    },
    onRemove: (state, action) => {
      // state.cart.splice(action.payload, 1);
      console.log('xxx onRemove', state, action);
    },
    updateCart: (state, action) => {
      const foundIndex = state.cart.findIndex(
        item => item.id === action.payload.id,
      );
      if (foundIndex != -1)
        state.cart[foundIndex].number += action.payload.number;
      else state.cart.unshift(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getSlides.pending, (state, action) => {
      state.isLoading = true;
      state.isLastPage = false;
      state.error = null;
      console.log('xxx extraReducers pending', state, action);
      return state;
    });
    builder.addCase(getSlides.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoadMore = false;
      // state.cart = action.payload.order;
      console.log('xxx extraReducers fulfilled', state, action);
      return state;
    });
    builder.addCase(getSlides.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoadMore = false;
      state.isLastPage = false;
      state.error = action.payload;
      console.log('xxx extraReducers rejected', state, action);
      return state;
    });
  },
});

export const {onIncrease, onDecrease, onRemove, updateCart} = cartSlice.actions;
export default cartSlice.reducer;
