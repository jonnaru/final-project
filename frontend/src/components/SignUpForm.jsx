import React from "react";

import { StyledForm } from "./styling/StyledForm";
import { TextInput } from "../lib/TextInput";
import { PrimaryButton } from "../lib/PrimaryButton";

export const SignUpForm = () => {
  return (
    <StyledForm>
      <h1>sign up form</h1>
      <TextInput placeholder="first name" />
      <TextInput placeholder="last name" />
      <TextInput placeholder="address" />
      <TextInput placeholder="postal code" />
      <TextInput placeholder="city" />
      <TextInput placeholder="password" />
      <TextInput placeholder="password confirm" />
      <PrimaryButton small title="sign up" />
    </StyledForm>
  );
};
