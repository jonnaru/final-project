import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { user } from "../reducers/user";
import { URL } from "../App";

import { LoginDrawer } from "./LoginDrawer";
import { Nav } from "./Nav";
import { PrimaryButton } from "../lib/PrimaryButton";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  padding: 0 10px;
  padding-bottom: 40px;
  width: 100%;
  max-width: 1400px;

  margin: auto;
  /* border: 1px solid grey; */
`;

const Logo = styled.h1`
  font-size: 52px;
  z-index: 10;
  cursor: pointer;
`;

export const Header = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const [showNav, setShowNav] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const dispatch = useDispatch();
  const { setAccessToken, setStatusMessage } = user.actions;

  const LOGOUT_URL = `${URL}/users/logout`;

  const logout = () => {
    // Include userId in the path
    fetch(LOGOUT_URL, {
      method: "POST",
      // Include the accessToken to get the protected endpoint
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
    dispatch(setAccessToken({ accessToken: null }));
  };

  const logoutFailed = (logoutError) => {
    dispatch(setStatusMessage({ statusMessage: logoutError.message }));
  };

  return (
    <>
      <HeaderContainer>
        <PrimaryButton
          small
          title={!accessToken ? "sign in" : "log out"}
          onClick={!accessToken ? () => setShowDrawer(true) : logout}
        />

        <Logo onMouseEnter={() => setShowNav(true)}>shop-name</Logo>
        {showNav && <Nav closeNav={() => setShowNav(false)} />}
        {showDrawer && <LoginDrawer closeDrawer={() => setShowDrawer(false)} />}
      </HeaderContainer>
    </>
  );
};
