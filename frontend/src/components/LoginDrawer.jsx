import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components/macro";

import { Backdrop } from "./styling/Backdrop";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { PrimaryButton } from "../lib/PrimaryButton";

const Drawer = styled.aside`
  width: 400px;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 10;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  /* border: 1px solid grey; */
  animation-duration: 3s;
`;

export const LoginDrawer = ({ closeDrawer }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <Drawer>
        {!showSignUp ? (
          <LoginForm closeDrawer={closeDrawer} />
        ) : (
          <SignUpForm closeDrawer={closeDrawer} />
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
