import React from "react";

import { StyledForm } from "./styling/StyledForm";
import { TextInput } from "../lib/TextInput";
import { PrimaryButton } from "../lib/PrimaryButton";

export const LoginForm = () => {
  return (
    <StyledForm>
      <h1>login form</h1>
      <TextInput placeholder="email" />
      <TextInput placeholder="password" />
      <PrimaryButton small title="sign in" />
    </StyledForm>
  );
};
