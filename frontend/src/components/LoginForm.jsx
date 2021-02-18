import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { user, login } from "../reducers/user";

import { TextInput } from "../lib/TextInput";
import { PrimaryButton } from "../lib/PrimaryButton";

export const LoginForm = ({ closeDrawer }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const statusMessage = useSelector((store) => store.user.login.statusMessage);
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const dispatch = useDispatch();
  const { setStatusMessage } = user.actions;

  useEffect(() => {
    // Clean up
    return () => {
      dispatch(setStatusMessage({ statusMessage: "" }));
    };
  }, []);

  // Closing drawer on login success
  if (accessToken) closeDrawer();

  // Login a user
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleLogin}>
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
      <PrimaryButton type="submit" title="sign in" />
      {statusMessage && <p>{`${statusMessage}`}</p>}
    </form>
  );
};
