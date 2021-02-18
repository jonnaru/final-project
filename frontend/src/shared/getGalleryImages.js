import { createClient } from "contentful";

export const getGalleryImages = (setImages, handleLoadingChange) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  const BrandId = process.env.REACT_APP_CONTENTFUL_BRAND;
  handleLoadingChange(true);
  client
    .getEntry(BrandId)
    .then((brand) => {
      setImages(brand.fields.gallery);
    })
    .catch((error) => {
      console.error("error", error);
    })
    .finally(() => {
      setTimeout(() => {
        handleLoadingChange(false);
      }, 100);
    });
};
