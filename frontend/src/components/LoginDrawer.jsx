import React, { useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { Backdrop } from "./styling/Backdrop";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { PrimaryButton } from "../lib/PrimaryButton";
import { ui } from "../reducers/ui";

const show = keyframes`
  from {transform: translateX(-100%)}
  to {transform: translateX(0%)}
`;

const Drawer = styled.aside`
  position: fixed;
  width: 400px;
  top: 0;
  bottom: 0;

  background: #fff;
  z-index: 25;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  animation: ${show} 0.5s;

  transition: 0.5s;
  transform: ${({ animateDrawer }) =>
    animateDrawer ? "translateX(-100%)" : "translateX(0%)"};
`;

export const LoginDrawer = () => {
  const showDrawer = useSelector((store) => store.ui.showDrawer);
  const dispatch = useDispatch();

  const { setShowDrawer } = ui.actions;

  const [showSignUp, setShowSignUp] = useState(false);
  const [animateDrawer, setAnimateDrawer] = useState(false);

  const closeDrawer = () => {
    setAnimateDrawer(true);
    setTimeout(() => {
      dispatch(setShowDrawer(false));
      setAnimateDrawer(false);
    }, 500);
  };

  if (!showDrawer) return <></>;

  return (
    <>
      <Drawer showDrawer={showDrawer} animateDrawer={animateDrawer}>
        {showSignUp ? (
          <SignUpForm closeDrawer={closeDrawer} />
        ) : (
          <LoginForm closeDrawer={closeDrawer} />
        )}
        <PrimaryButton
          title={showSignUp ? "Login" : "Create an account"}
          onClick={() => setShowSignUp(!showSignUp)}
        />
      </Drawer>
      <Backdrop onClick={closeDrawer} />
    </>
  );
};
