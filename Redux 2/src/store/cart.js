import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, payload) {
      const itemAdded = payload.payload;
      // payload = item
      // check if item exist
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === itemAdded.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      //  when item exist add 1
      if (existingCartItem) {
        state.items[existingCartItemIndex].quantity += 1;
      }
      //  no item exist and we must add it
      else {
        state.items.push({ ...itemAdded, quantity: 1 });
      }
    },

    removeItem(state, payload) {
      const itemId = payload.payload;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === itemId
      );
      const existingCartItem = state.items[existingCartItemIndex];
      //   kalau jumlahnya lebih dari 1
      if (existingCartItem.quantity > 1) {
        state.items[existingCartItemIndex].quantity -= 1;
      }
      //   jumlah kurang dari 1
      else {
        state.items.splice(existingCartItemIndex, 1);
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
