import React from "react";
import { useSelector } from "react-redux";

import { PageContainer } from "./styling/PageContainer";

export const CartPage = () => {
  const name = useSelector((store) => store.user.login.name);
  const lastName = useSelector((store) => store.user.login.lastName); // this?
  const address = useSelector((store) => store.user.login.address); // this?
  const postalCode = useSelector((store) => store.user.login.postalCode); // this?
  const city = useSelector((store) => store.user.login.city); // this?
  const email = useSelector((store) => store.user.login.email);

  return (
    <PageContainer>
      <h1>This is a cart page for:</h1>
      <p>{`First name: ${name}`}</p>
      <p>{`Last name: ${lastName}`}</p>
      <p>{`Address: ${address}`}</p>
      <p>{`Postal code: ${postalCode}`}</p>
      <p>{`City: ${city}`}</p>
      <p>{`Email: ${email}`}</p>
    </PageContainer>
  );
};
