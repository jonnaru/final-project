import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ui } from "../reducers/ui";
// import { getChangeQuantity } from "../shared/getChangeQuantity"; --> SAVING FOR FUTURE CHECKOUT

import { StyledDrawer } from "./styling/StyledDrawer";
import { StyledCartLIst } from "./styling/StyledCartList";
import { Backdrop } from "../lib/Backdrop";
import { PrimaryButton } from "../lib/PrimaryButton";
import { Dialog } from "../lib/Dialog";
import { IconExit } from "../lib/IconExit";

export const CartDrawer = () => {
  const [showCheckoutAlert, setShowCheckoutAlert] = useState(false);
  const [animateDrawer, setAnimateDrawer] = useState(false);

  const showCartDrawer = useSelector((store) => store.ui.showCartDrawer);
  const products = useSelector((store) => store.cart.items);

  const totalPrice = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + item.price * item.cartQuantity,
      0
    )
  );

  const dispatch = useDispatch();
  const { setShowCartDrawer } = ui.actions;

  const closeDrawer = () => {
    setAnimateDrawer(true);
    setTimeout(() => {
      dispatch(setShowCartDrawer(false));
      setAnimateDrawer(false);
    }, 500);
  };

  if (!showCartDrawer) return <></>;

  // --> SAVING FOR FUTURE CHECKOUT
  // const changeQuantity = () => {
  //   getChangeQuantity();
  // };

  return (
    <>
      {showCheckoutAlert && (
        <Dialog
          drawer
          title="Checkout is coming soon"
          secondaryText="Email to order"
          buttonText="ok"
          onClose={() => setShowCheckoutAlert(false)}
        />
      )}
      <StyledDrawer
        showLoginDrawer={showCartDrawer}
        animateDrawer={animateDrawer}
      >
        {products.length === 0 ? (
          <h1>cart is empty</h1>
        ) : (
          <>
            <h1 style={{ marginBottom: 30 }}>your cart</h1>
            <StyledCartLIst />
            <h2>
              Total: {totalPrice > 599 ? totalPrice : totalPrice + 79} SEK
            </h2>
            <p>Shipping: {totalPrice < 600 ? "79 SEK" : "Free"}</p>
            <PrimaryButton
              title="Checkout"
              onClick={() => setShowCheckoutAlert(true)}
            />
          </>
        )}
        {/* <button onClick={() => changeQuantity()}>test</button> */}
        <IconExit onClick={closeDrawer} />
      </StyledDrawer>
      <Backdrop onClick={closeDrawer} />
    </>
  );
};
