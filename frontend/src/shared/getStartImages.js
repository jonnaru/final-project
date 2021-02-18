import { createClient } from "contentful";

export const getStartImages = (setImages) => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  const BrandId = "4QooFrW7W3oRtVqjitZaw2";

  client
    .getEntry(BrandId)
    .then((brand) => {
      console.log("brand", brand);
      setImages(brand.fields.slider);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
