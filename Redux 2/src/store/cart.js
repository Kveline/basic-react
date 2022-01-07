import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // send notif
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data..",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-project-eb3a6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      // send notif
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Successfully.",
        })
      );
    } catch (error) {
      // send notif
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
