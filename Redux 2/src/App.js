import { useEffect, Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui";

// for coditional useEffect
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // watch cart state in redux and if cart changed we send it to server
  useEffect(() => {
    const sendCartData = async () => {
      // send notif
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "Sending cart data..",
        })
      );

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

      // send notif
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Successfully.",
        })
      );

      const responseData = await response.json();
    };

    // dont send data if we are in first load
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      // send notif
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
