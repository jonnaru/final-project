import { createClient } from "contentful";

export const getItem = (id, setProduct) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  client
    .getEntry(id)
    .then((item) => {
      console.log("item product page", item);
      setProduct({
        id: item.sys.id,
        title: item.fields.productName,
        price: item.fields.price,
        color: item.fields.color,
        measurements: item.fields.size,
        inStock: item.fields.quantity,
        description: item.fields.productDescription,
        materialCare: item.fields.materialCare,
        sample: item.fields.sample,
        mainImage: item.fields.image[0],
        images: item.fields.image.slice(1),
        thumb: item.fields.thumb,
      });
    })
    .catch((error) => {
      console.log("error", error);
    });
};
