import { createClient } from "contentful";

export const getLikes = (likes, setLikedProducts) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  client
    .getEntries({
      content_type: "product",
      limit: 40,
      skip: 0,
    })
    .then((data) => {
      const filteredProducts = data.items.filter((item) =>
        likes.includes(item.sys.id)
      );
      setLikedProducts(filteredProducts);
    })
    .catch((error) => {
      console.error("error", error);
    });
};
