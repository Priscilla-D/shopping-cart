import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload: id }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increaseItem: (state, { payload: id }) => {
      const currentItem = state.cartItems.find((item) => item.id === id);
      currentItem.amount = currentItem.amount + 1;
    },
    decreaseItem: (state, { payload: id }) => {
      const currentItem = state.cartItems.find((item) => item.id === id);
      currentItem.amount = currentItem.amount - 1;
    },
  },
});

export const { clearCart, removeItem, increaseItem, decreaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;
