import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Backdrop } from "./styling/Backdrop";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";
import { SecondaryButton } from "../lib/SecondaryButton";
import { StyledDrawer } from "./styling/StyledDrawer";
import { IconExit } from "../lib/IconExit";
import { ui } from "../reducers/ui";

export const LoginDrawer = () => {
  const showLoginDrawer = useSelector((store) => store.ui.showLoginDrawer);
  const dispatch = useDispatch();

  const { setShowLoginDrawer } = ui.actions;

  const [showSignUp, setShowSignUp] = useState(false);
  const [animateDrawer, setAnimateDrawer] = useState(false);

  const closeDrawer = () => {
    setAnimateDrawer(true);
    setTimeout(() => {
      dispatch(setShowLoginDrawer(false));
      setAnimateDrawer(false);
    }, 500);
  };

  if (!showLoginDrawer) return <></>;

  return (
    <>
      <StyledDrawer
        showLoginDrawer={showLoginDrawer}
        animateDrawer={animateDrawer}
      >
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
