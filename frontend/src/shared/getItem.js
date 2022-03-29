import { createClient } from "contentful";

export const getItem = (id, setProduct, handleLoadingChange) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  handleLoadingChange(true);
  client
    .getEntry(id)
    .then((item) => {
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
        sale: item.fields.sale,
        mainImage: item.fields.image[0],
        images: item.fields.image.slice(1),
        thumb: item.fields.thumb,
      });
    })
    .catch((error) => {
      console.error("error", error);
    })
    .finally(() => {
      handleLoadingChange(false);
    });
};
