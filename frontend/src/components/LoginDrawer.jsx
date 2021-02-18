import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ui } from "../reducers/ui";

import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { StyledDrawer } from "./styling/StyledDrawer";
import { Backdrop } from "../lib/Backdrop";
import { SecondaryButton } from "../lib/SecondaryButton";
import { IconExit } from "../lib/IconExit";

export const LoginDrawer = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [animateDrawer, setAnimateDrawer] = useState(false);

  const showLoginDrawer = useSelector((store) => store.ui.showLoginDrawer);

  const dispatch = useDispatch();
  const { setShowLoginDrawer } = ui.actions;

  const closeDrawer = () => {
    setAnimateDrawer(true);

    setTimeout(() => {
      dispatch(setShowLoginDrawer(false));
      setAnimateDrawer(false);
      setShowSignUp(false);
    }, 500);
  };

  if (!showLoginDrawer) return <></>;

  return (
    <>
      <StyledDrawer animateDrawer={animateDrawer}>
        {showSignUp ? (
          <SignUpForm closeDrawer={closeDrawer} />
        ) : (
          <LoginForm closeDrawer={closeDrawer} />
        )}
        <SecondaryButton
          title={showSignUp ? "Already have an account?" : "Create an account"}
          onClick={() => setShowSignUp(!showSignUp)}
        />
        <IconExit onClick={closeDrawer} />
      </StyledDrawer>
      <Backdrop onClick={closeDrawer} />
    </>
  );
};
