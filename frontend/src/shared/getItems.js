import { createClient } from "contentful";

export const getItems = (setProducts, setCategories, handleLoadingChange) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  handleLoadingChange(true);
  client
    .getEntries({
      content_type: "product",
      limit: 40,
      skip: 0,
    })
    .then((data) => {
      setProducts(data.items);
      setCategories(data.includes.Entry);
    })
    .catch((error) => {
      console.error("error", error);
    })
    .finally(() => {
      handleLoadingChange(false);
    });
};
