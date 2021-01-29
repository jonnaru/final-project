import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { user } from "../reducers/user";
import { ui } from "../reducers/ui";
import { URL } from "../App";

import { LoginDrawer } from "./LoginDrawer";
import { PrimaryButton } from "../lib/PrimaryButton";
import { HeaderContainer } from "./styling/HeaderContainer";
import { HeaderLogo } from "../lib/HeaderLogo";

export const Header = () => {
  const location = useLocation();

  const accessToken = useSelector((store) => store.user.login.accessToken);
  const showDrawer = useSelector((store) => store.ui.showDrawer);

  const dispatch = useDispatch();
  const { logout: logoutAction, setStatusMessage } = user.actions;
  const { setShowNav, setShowDrawer } = ui.actions;

  const LOGOUT_URL = `${URL}/users/logout`;

  const logout = () => {
    fetch(LOGOUT_URL, {
      method: "POST",

      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to logout");
        }
        return res.json();
      })
      .then((json) => logoutSuccess(json))
      .catch((err) => logoutFailed(err));
  };

  const logoutSuccess = () => {
    dispatch(setStatusMessage({ statusMessage: "You are logged out" }));
    dispatch(logoutAction());
  };

  const logoutFailed = (logoutError) => {
    dispatch(setStatusMessage({ statusMessage: logoutError.message }));
  };

  if (location.pathname === "/") return <></>;

  return (
    <>
      <HeaderContainer>
        <PrimaryButton
          small
          title={!accessToken ? "sign in" : "log out"}
          onClick={!accessToken ? () => dispatch(setShowDrawer(true)) : logout}
        />

        <HeaderLogo onMouseEnter={() => dispatch(setShowNav(true))}>
          shop-name
        </HeaderLogo>
        {showDrawer && (
          <LoginDrawer
            showDrawer={showDrawer}
            closeDrawer={() => dispatch(setShowDrawer(false))}
          />
        )}
      </HeaderContainer>
    </>
  );
};
