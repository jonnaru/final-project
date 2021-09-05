import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ui } from "../reducers/ui";
// import { getChangeQuantity } from "../shared/getChangeQuantity"; --> SAVING FOR FUTURE CHECKOUT

import { getSwishQrCode } from "../shared/getSwishQrCode";

import { StyledDrawer } from "./styling/StyledDrawer";
import { StyledCartLIst } from "./styling/StyledCartList";
import { Backdrop } from "../lib/Backdrop";
import { PrimaryButton } from "../lib/PrimaryButton";
import { Link } from "../lib/Link";
import { Dialog } from "../lib/Dialog";
import { IconExit } from "../lib/IconExit";

export const CartDrawer = () => {
  const [showCheckoutAlert, setShowCheckoutAlert] = useState(false);
  const [animateDrawer, setAnimateDrawer] = useState(false);
  const [qrCodeImg, setQrCodeImg] = useState(null);

  const showCartDrawer = useSelector((store) => store.ui.showCartDrawer);
  const products = useSelector((store) => store.cart.items);
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const dispatch = useDispatch();
  const { setShowLoginDrawer } = ui.actions;

  const { setShowCartDrawer } = ui.actions;

  const sumPrice = products.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  const getTotalPrice = (price) => {
    if (price < 600) price += 79;
    return price;
  };

  const totalPrice = getTotalPrice(sumPrice);

  const getMessage = (split) =>
    products
      .reduce(
        (message, item) =>
          `${message} ${item.cartQuantity}\u00A0${item.title.split(split)[0]},`,
        ""
      )
      .slice(0, -1)
      .toLowerCase();

  const message = getMessage();

  const qRCodeData = {
    message: message.length < 50 ? message : getMessage(" "),
    amount: totalPrice,
  };

  const signUpHandler = () => {
    closeDrawer();
    dispatch(setShowLoginDrawer(true));
  };

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

  const checkoutHandler = async () => {
    setQrCodeImg(null);
    setShowCheckoutAlert(true);
    getSwishQrCode(setQrCodeImg, qRCodeData);
  };

  const messageToLong = qRCodeData.message.length > 50;

  const mailHref = `mailto:hello@drejad.studio?subject=Order drejad.studio&body=Hi, %0AI would like to order${message} for ${totalPrice} SEK. %0A%0AMy preferred payment method: %0A%0AMy contact information: `;

  return (
    <>
      {showCheckoutAlert && (
        <Dialog
          drawer
          title="Swish to order"
          secondaryText={`${message} for ${totalPrice}\u00A0SEK`}
          buttonText="OK"
          linkText="No swish? Email order to hello@drejad.studio"
          href={mailHref}
          img={qrCodeImg}
          altText="QR Code"
          loadingText="Loading QR Code"
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
            <h2>Total: {totalPrice} SEK</h2>
            <p>Shipping: {sumPrice < 600 ? "79 SEK" : "Free"}</p>

            <PrimaryButton
              title={accessToken ? "Checkout" : "Login to order"}
              disabled={messageToLong}
              onClick={accessToken ? checkoutHandler : signUpHandler}
            />

            {messageToLong && (
              <Link
                title="Email large orders to hello@drejad.studio"
                href={mailHref}
              />
            )}

            {!accessToken && (
              <Link
                small
                title={"Or email order to hello@drejad.studio"}
                href={mailHref}
              />
            )}
          </>
        )}
        {/* <button onClick={() => changeQuantity()}>test</button> */}
        <IconExit onClick={closeDrawer} />
      </StyledDrawer>
      <Backdrop onClick={closeDrawer} />
    </>
  );
};
