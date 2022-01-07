import { uiActions } from "./ui";
import { cartAction } from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-project-eb3a6-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data.items;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

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
