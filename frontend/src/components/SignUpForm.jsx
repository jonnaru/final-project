import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { user } from "../reducers/user";

import { StyledForm } from "./styling/StyledForm";
import { TextInput } from "../lib/TextInput";
import { PrimaryButton } from "../lib/PrimaryButton";

export const SignUpForm = ({ URL }) => {
  const SIGNUP_URL = `${URL}/users`;

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignupSuccess = (signupResponse) => {
    console.log(signupResponse);
    dispatch(
      user.actions.setStatusMessage({
        statusMessage: signupResponse.message,
      })
    );
  };

  const handleSignupFailed = (signupError) => {
    dispatch(
      user.actions.setStatusMessage({
        statusMessage: signupError.message,
      })
    );
  };

  // To sign up a user
  const handleSignup = (event) => {
    event.preventDefault();

    // Regex e-mail
    const mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    mail.test(email);

    if (
      !name ||
      !lastName ||
      !address ||
      !postalCode ||
      !city ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      dispatch(
        user.actions.setStatusMessage({
          statusMessage: "All fields are required",
        })
      );
    } else if (!mail.test(email)) {
      dispatch(
        user.actions.setStatusMessage({
          statusMessage: "Please check your email",
        })
      );
    } else if (password.length < 8) {
      dispatch(
        user.actions.setStatusMessage({
          statusMessage: "Minimum password is 8 characters",
        })
      );
    } else if (password !== confirmPassword) {
      dispatch(
        user.actions.setStatusMessage({
          statusMessage: "Password don't match",
        })
      );
    } else {
      fetch(SIGNUP_URL, {
        method: "POST",
        body: JSON.stringify({
          name,
          lastName,
          address,
          postalCode,
          city,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Signup Failed");
          }
          return res.json();
        })
        .then((json) => handleSignupSuccess(json))
        .catch((err) => handleSignupFailed(err));
    }
  };

  return (
    <StyledForm>
      <h1>sign up form</h1>
      <TextInput
        placeholder="first name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        type="text"
      />
      <TextInput
        placeholder="last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
        type="text"
      />
      <TextInput
        placeholder="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        required
        type="text"
      />
      <TextInput
        placeholder="postal code"
        value={postalCode}
        onChange={(event) => setPostalCode(event.target.value)}
        required
        type="text"
      />
      <TextInput
        placeholder="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        required
        type="text"
      />
      <TextInput
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        type="text"
      />
      <TextInput
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        type="password"
      />
      <TextInput
        placeholder="password confirm"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        required
        type="password"
      />
      <PrimaryButton
        small
        type="submit"
        title="sign up"
        onClick={handleSignup}
      />
    </StyledForm>
  );
};
