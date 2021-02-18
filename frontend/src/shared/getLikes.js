import { createClient } from "contentful";

export const getLikes = (likes, setLikedProducts) => {
  const client = createClient({
    space: "u1hj1odlv53m",
    accessToken: "1TRVfQyDn_PgHJtYsjYqeBAg8hfo5bIATKK_MBsFHYU",
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
      console.log("error", error);
    });
};
