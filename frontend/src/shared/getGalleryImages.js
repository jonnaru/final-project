import { createClient } from "contentful";

export const getGalleryImages = (setImages) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  const BrandId = "4QooFrW7W3oRtVqjitZaw2";

  client
    .getEntry(BrandId)
    .then((brand) => {
      setImages(brand.fields.gallery);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
