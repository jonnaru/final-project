import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { logout } from "../reducers/user";
import { ui } from "../reducers/ui";
import { cart } from "../reducers/cart";

import { TotalCartItems } from "./TotalCartItems";
import { HeaderContentContainer } from "./styling/HeaderContentContainer";
import { HeaderContainer } from "./styling/HeaderContainer";
import { HeaderCartContainer } from "./styling/HeaderCartContainer";
import { PrimaryButton } from "../lib/PrimaryButton";
import { HeaderLogo } from "../lib/HeaderLogo";
import { IconCart } from "../lib/IconCart";

export const Header = () => {
  const location = useLocation();

  const accessToken = useSelector((store) => store.user.login.accessToken);

  const dispatch = useDispatch();
  const { setShowNav, setShowLoginDrawer, setShowCartDrawer } = ui.actions;
  const { emptyCart } = cart.actions;

  const handleOnClick = () => {
    if (!accessToken) {
      dispatch(setShowLoginDrawer(true));
    } else {
      dispatch(logout());
      dispatch(emptyCart());
    }
  };

  if (location.pathname === "/") return <></>;

  return (
    <>
      <HeaderContainer>
        <HeaderContentContainer>
          <PrimaryButton
            small
            title={!accessToken ? "sign in" : "log out"}
            onClick={handleOnClick}
          />
          <HeaderCartContainer>
            <IconCart onClick={() => dispatch(setShowCartDrawer(true))} />
            <TotalCartItems />
          </HeaderCartContainer>
        </HeaderContentContainer>
        <HeaderLogo
          onMouseEnter={() => dispatch(setShowNav(true))}
          onClick={() => dispatch(setShowNav(true))}
        />
      </HeaderContainer>
    </>
  );
};
