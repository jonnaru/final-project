import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { URL } from "../App";
import { user } from "../reducers/user";

import { StyledForm } from "./styling/StyledForm";
import { TextInput } from "../lib/TextInput";
import { PrimaryButton } from "../lib/PrimaryButton";

export const SignUpForm = ({ closeDrawer }) => {
  const SIGNUP_URL = `${URL}/users`;

  const statusMessage = useSelector((store) => store.user.login.statusMessage);

  const dispatch = useDispatch();

  const {
    setAccessToken,
    setUserId,
    setName: setFirstName,
    setStatusMessage,
  } = user.actions;

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // Clean up
    return () => {
      dispatch(user.actions.setStatusMessage({ statusMessage: "" }));
    };
  }, []);

  const handleSignupSuccess = (signupResponse) => {
    dispatch(setAccessToken({ accessToken: signupResponse.accessToken }));
    dispatch(setUserId({ userId: signupResponse.userId }));
    dispatch(setFirstName({ name: signupResponse.name }));
    dispatch(setLastName({ lastName: signupResponse.lastName }));
    dispatch(setStatusMessage({ statusMessage: signupResponse.message }));
    // closing drawer
    closeDrawer();
  };

  const handleSignupFailed = (signupError) => {
    dispatch(setStatusMessage({ statusMessage: signupError.message }));
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

  const SignUpFormValues = [
    {
      placeholder: "first name",
      value: name,
      onChange: (event) => setName(event.target.value),
      required: true,
      type: "text",
    },
    {
      placeholder: "last name",
      value: lastName,
      onChange: (event) => setLastName(event.target.value),
      required: true,
      type: "text",
    },
    {
      placeholder: "address",
      value: address,
      onChange: (event) => setAddress(event.target.value),
      required: true,
      type: "text",
    },
    {
      placeholder: "postal code",
      value: postalCode,
      onChange: (event) => setPostalCode(event.target.value),
      required: true,
      type: "text",
    },
    {
      placeholder: "city",
      value: city,
      onChange: (event) => setCity(event.target.value),
      required: true,
      type: "text",
    },
    {
      placeholder: "email",
      value: email,
      onChange: (event) => setEmail(event.target.value),
      required: true,
      type: "text",
    },
    {
      placeholder: "password",
      value: password,
      onChange: (event) => setPassword(event.target.value),
      required: true,
      type: "password",
    },
    {
      placeholder: "password confirm",
      value: confirmPassword,
      onChange: (event) => setConfirmPassword(event.target.value),
      required: true,
      type: "password",
    },
  ];

  return (
    <StyledForm>
      <h1>sign up</h1>
      {SignUpFormValues.map((item) => (
        <TextInput
          placeholder={item.placeholder}
          value={item.value}
          onChange={item.onChange}
          required={item.value}
          type={item.type}
        />
      ))}
      <PrimaryButton
        small
        type="submit"
        title="sign up"
        onClick={handleSignup}
      />
      <p>{`${statusMessage}`}</p>
    </StyledForm>
  );
};
