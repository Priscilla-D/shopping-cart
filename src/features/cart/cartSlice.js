import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: false,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.error(err));
});

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
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.map((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      const datas = action.payload;
      state.isLoading = false;
      state.cartItems = datas;
    });
    builder.addMatcher(getCartItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  clearCart,
  calculateTotals,
  removeItem,
  increaseItem,
  decreaseItem,
} = cartSlice.actions;

export default cartSlice.reducer;
