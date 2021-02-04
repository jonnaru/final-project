import React, { useState } from "react";
import { createClient } from "contentful-management";
import { useSelector, useDispatch } from "react-redux";
import { ui } from "../reducers/ui";
import { Backdrop } from "./styling/Backdrop";
import { StyledDrawer } from "./styling/StyledDrawer";
import { CartCard } from "./styling/CartList";

const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
});

const id = "67FditGZDejc2XnMLtqIY3";

export const CartDrawer = () => {
  const showCartDrawer = useSelector((store) => store.ui.showCartDrawer);

  const totalPrice = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + item.price * item.cartQuantity,
      0
    )
  );

  const products = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const { setShowCartDrawer } = ui.actions;
  const [animateDrawer, setAnimateDrawer] = useState(false);

  const closeDrawer = () => {
    setAnimateDrawer(true);
    setTimeout(() => {
      dispatch(setShowCartDrawer(false));
      setAnimateDrawer(false);
    }, 500);
  };

  if (!showCartDrawer) return <></>;

  const changeQuantity = () => {
    client
      .getSpace(process.env.REACT_APP_CONTENTFUL_SPACE)
      .then((space) => space.getEnvironment("master"))
      .then((environment) => environment.getEntry(id))
      .then((item) => {
        console.log("Prev quantity", item.fields.quantity["en-US"]);
        item.fields.quantity["en-US"] = item.fields.quantity["en-US"] - 1;
        return item.update();
      })
      .then((item) => item.publish())
      .then((item) =>
        console.log(
          `${item.fields.productName["en-US"]} updated. New quantity ${item.fields.quantity["en-US"]}`
        )
      )
      .catch(console.error);
  };

  return (
    <>
      <StyledDrawer
        showLoginDrawer={showCartDrawer}
        animateDrawer={animateDrawer}
      >
        {products.length === 0 ? (
          <h1>your cart is empty</h1>
        ) : (
          <>
            <h1 style={{ marginBottom: 30 }}>your cart</h1>
            <CartCard />
            <h2>Total: {totalPrice} SEK</h2>
          </>
        )}

        <button onClick={() => changeQuantity()}>test</button>
      </StyledDrawer>
      <Backdrop onClick={closeDrawer} />
    </>
  );
};
