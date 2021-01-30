import React from "react";
import { useSelector } from "react-redux";

import { PageContainer } from "./styling/PageContainer";

export const CartPage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const name = useSelector((store) => store.user.login.name);
  const lastName = useSelector((store) => store.user.login.lastName);
  const address = useSelector((store) => store.user.login.address);
  const postalCode = useSelector((store) => store.user.login.postalCode);
  const city = useSelector((store) => store.user.login.city);
  const email = useSelector((store) => store.user.login.email);

  return (
    <PageContainer>
      {!accessToken ? (
        <h1>Sign in to view cart</h1>
      ) : (
        <>
          <h1>{`Hello ${name}!`}</h1>
          <p>User details:</p>
          <p>{`${name}`}</p>
          <p>{`${lastName}`}</p>
          <p>{`${address}`}</p>
          <p>{`${postalCode}`}</p>
          <p>{`${city}`}</p>
          <p>{`${email}`}</p>
        </>
      )}
    </PageContainer>
  );
};
