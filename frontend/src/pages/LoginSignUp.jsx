import React, { useState } from "react";

import { LoginForm } from "../components/LoginForm";
import { SignUpForm } from "../components/SignUpForm";
import { PrimaryButton } from "../lib/PrimaryButton";

export const LoginSignUp = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      {!showSignUp ? <LoginForm URL={URL} /> : <SignUpForm URL={URL} />}

      <PrimaryButton
        title={showSignUp ? "Login" : "Create an account"}
        onClick={() => setShowSignUp(!showSignUp)}
      />
    </>
  );
};
