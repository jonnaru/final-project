import { createClient } from "contentful";

export const getStartImages = (setImages) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  const BrandId = process.env.REACT_APP_CONTENTFUL_BRAND;

  client
    .getEntry(BrandId)
    .then((brand) => {
      setImages(brand.fields.slider);
    })
    .catch((error) => {
      console.error("error", error);
    });
};
