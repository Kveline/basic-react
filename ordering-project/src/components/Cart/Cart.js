import { useContext, useState, Fragment } from "react";
import useHttp from "../../hooks/use-http";

import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { sendRequest } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  // for checking out
  const checkoutState = (state) => {
    setIsCheckout(state);
  };

  const submitOrder = () => {
    sendRequest({
      url: "https://react-project-eb3a6-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        items: cartCtx.items,
      },
    });

    // close checkout and modal
    checkoutState(false);
    // reset cart
    cartCtx.clearCart();
    setIsSubmitted(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  let content = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button
            onClick={() => checkoutState(true)}
            className={classes.button}
          >
            Order
          </button>
        )}
      </div>
    </Fragment>
  );

  // content for checkout
  if (isCheckout) {
    content = (
      <Checkout
        onConfirm={() => submitOrder()}
        onCancel={() => checkoutState(false)}
      />
    );
  }

  // submitted content (for user feedback)
  if (isSubmitted) {
    content = <h3>Thanks for your order!</h3>;
  }

  return <Modal onClose={props.onClose}>{content}</Modal>;
};

export default Cart;
