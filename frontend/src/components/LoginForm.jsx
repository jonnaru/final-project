import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { user } from "../reducers/user";

import { StyledForm } from "./styling/StyledForm";
import { TextInput } from "../lib/TextInput";
import { PrimaryButton } from "../lib/PrimaryButton";

export const LoginForm = ({ URL }) => {
  const LOGIN_URL = `${URL}/sessions`;

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login success
  const handleLoginSuccess = (loginResponse) => {
    dispatch(
      user.actions.setAccessToken({
        accessToken: loginResponse.accessToken,
      })
    );
    dispatch(
      user.actions.setUserId({
        userId: loginResponse.userId,
      })
    );
    dispatch(
      user.actions.setName({
        name: loginResponse.name,
      })
    );
    dispatch(
      user.actions.setStatusMessage({
        statusMessage: "You are logged in",
      })
    );
  };

  // Login fail
  const handleLoginFailed = (loginError) => {
    dispatch(
      user.actions.setAccessToken({
        accessToken: null,
      })
    );
    dispatch(
      user.actions.setStatusMessage({
        statusMessage: loginError.message,
      })
    );
  };

  // Login a user
  const handleLogin = (event) => {
    event.preventDefault();

    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Login Failed");
        }
        return res.json();
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err))
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  return (
    <StyledForm>
      <h1>login form</h1>
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
      <PrimaryButton small title="sign in" onClick={handleLogin} />
    </StyledForm>
  );
};
