import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { logout } from "../reducers/user";
import { ui } from "../reducers/ui";

import { PrimaryButton } from "../lib/PrimaryButton";
import { HeaderContainer } from "./styling/HeaderContainer";
import { HeaderLogo } from "../lib/HeaderLogo";
import { IconCart } from "../lib/IconCart";
import { TotalCartItems } from "./TotalCartItems";
// import { IconCart2 } from "../lib/IconCart2";
// import { IconBasket } from "../lib/IconBasket";
// import { IconBasket2 } from "../lib/IconBasket2";

export const Header = () => {
  const location = useLocation();

  const accessToken = useSelector((store) => store.user.login.accessToken);

  const dispatch = useDispatch();
  const { setShowNav, setShowLoginDrawer, setShowCartDrawer } = ui.actions;

  if (location.pathname === "/") return <></>;

  return (
    <>
      <HeaderContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <PrimaryButton
            small
            title={!accessToken ? "sign in" : "log out"}
            onClick={
              !accessToken
                ? () => dispatch(setShowLoginDrawer(true))
                : () => dispatch(logout())
            }
          />
          <IconCart onClick={() => dispatch(setShowCartDrawer(true))} />
          <TotalCartItems />
        </div>

        <HeaderLogo onMouseEnter={() => dispatch(setShowNav(true))} />
      </HeaderContainer>
    </>
  );
};
