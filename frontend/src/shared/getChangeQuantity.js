import { createClient } from "contentful-management";

export const getChangeQuantity = () => {
  const client = createClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN,
  });

  // TEST ID FOR PUTTE POT
  const id = "7cfdbBj2HuP7MhwXmLmgxb";

  client
    .getSpace(process.env.REACT_APP_CONTENTFUL_SPACE)
    .then((space) => space.getEnvironment("master"))
    .then((environment) => environment.getEntry(id))
    .then((item) => {
      item.fields.quantity["en-US"] = item.fields.quantity["en-US"] - 1;
      return item.update();
    })
    .then((item) => item.publish())
    .then((item) =>
      console.log(
        // saving console.log
        `${item.fields.productName["en-US"]} updated. New quantity ${item.fields.quantity["en-US"]}`
      )
    )
    .catch(console.error);
};
