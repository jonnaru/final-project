import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logout } from "../reducers/user";
import { ui } from "../reducers/ui";
import { cart } from "../reducers/cart";

import { PrimaryButton } from "../lib/PrimaryButton";
import { HeaderContainer } from "./styling/HeaderContainer";
import { ItemsInCartContainer } from "./styling/ItemsInCartContainer";
import { HeaderContentContainer } from "./styling/HeaderContentContainer";
import { HeaderLogo } from "../lib/HeaderLogo";
import { IconCart } from "../lib/IconCart";
import { TotalCartItems } from "./TotalCartItems";

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
          <ItemsInCartContainer>
            <IconCart onClick={() => dispatch(setShowCartDrawer(true))} />
            <TotalCartItems />
          </ItemsInCartContainer>
        </HeaderContentContainer>
        <HeaderLogo
          onMouseEnter={() => dispatch(setShowNav(true))}
          onClick={() => dispatch(setShowNav(true))}
        />
      </HeaderContainer>
    </>
  );
};
