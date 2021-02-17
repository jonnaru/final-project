import React from "react";
import { createClient } from "contentful-management";

import { PageContainer } from "./styling/PageContainer";

// to thunk
const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
});

const id = "67FditGZDejc2XnMLtqIY3";

export const CartPage = () => {
  const changeQuantity = () => {
    // to thunk
    client
      .getSpace(process.env.REACT_APP_CONTENTFUL_SPACE)
      .then((space) => space.getEnvironment("master"))
      .then((environment) => environment.getEntry(id))
      .then((item) => {
        console.log("Prev quantity", item.fields.quantity["en-US"]);
        item.fields.quantity["en-US"] = item.fields.quantity["en-US"] - 1;
        return item.update();
      })
      .then((item) => item.publish())
      .then((item) =>
        console.log(
          `${item.fields.productName["en-US"]} updated. New quantity ${item.fields.quantity["en-US"]}`
        )
      )
      .catch(console.error);
  };

  return (
    <PageContainer>
      <h1>Your cart is empty</h1>
      <button onClick={() => changeQuantity()}>test</button>
    </PageContainer>
  );
};
