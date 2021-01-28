import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { URL } from "../App";
import { user } from "../reducers/user";

import { StyledForm } from "./styling/StyledForm";
import { TextInput } from "../lib/TextInput";
import { PrimaryButton } from "../lib/PrimaryButton";

export const LoginForm = ({ closeDrawer }) => {
  const LOGIN_URL = `${URL}/sessions`;

  const statusMessage = useSelector((store) => store.user.login.statusMessage);

  const dispatch = useDispatch();
  const { setAccessToken, setUserId, setName, setStatusMessage } = user.actions;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // CLean up
    return () => {
      dispatch(setStatusMessage({ statusMessage: "" }));
    };
  }, []);

  // Login success
  const handleLoginSuccess = (loginResponse) => {
    // sending response to store
    dispatch(setAccessToken({ accessToken: loginResponse.accessToken }));
    dispatch(setUserId({ userId: loginResponse.userId }));
    dispatch(setName({ name: loginResponse.name }));
    // closing drawer
    closeDrawer();
  };

  // Login fail
  const handleLoginFailed = (loginError) => {
    // reset accessToken and show error message
    dispatch(setAccessToken({ accessToken: null }));
    dispatch(setStatusMessage({ statusMessage: loginError.message }));
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
      .catch((err) => handleLoginFailed(err));
    // .finally(() => {
    //   setEmail("");
    //   setPassword("");
    // });
  };

  return (
    <StyledForm>
      <h1>login</h1>
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
      <p>{`${statusMessage}`}</p>
    </StyledForm>
  );
};
