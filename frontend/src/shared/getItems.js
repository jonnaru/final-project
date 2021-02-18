import { createClient } from "contentful";

export const getItems = (setProducts, setCategories) => {
  const client = createClient({
    space: "u1hj1odlv53m",
    accessToken: "1TRVfQyDn_PgHJtYsjYqeBAg8hfo5bIATKK_MBsFHYU",
  });

  console.log("get items thunk");
  client
    .getEntries({
      content_type: "product",
      limit: 40,
      skip: 0,
    })
    .then((data) => {
      setProducts(data.items);
      setCategories(data.includes.Entry);
      console.log("data:", data);
      console.log("items:", data.items);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
