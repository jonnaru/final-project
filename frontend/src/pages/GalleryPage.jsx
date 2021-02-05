import React, { useEffect, useState } from "react";
import { Grid, Cell } from "styled-css-grid";
import styled from "styled-components/macro";

import { createClient } from "contentful";

import { PageContainer } from "./styling/PageContainer";

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

export const GalleryPage = () => {
  const [images, setImages] = useState([]);

  // const dispatch = useDispatch();

  const BrandId = "4QooFrW7W3oRtVqjitZaw2";
  useEffect(() => {
    client
      .getEntry(BrandId)
      .then((brand) => {
        console.log("brand", brand);
        setImages(brand.fields.gallery);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    // Will map this:
    <PageContainer>
      <Grid
        flow="row dense"
        columns="repeat(auto-fit,minmax(200px,1fr))"
        gap="20px"
      >
        {images.map((image, index) => (
          <Cell>
            <Image
              src={`https:${image.fields.file.url}`}
              alt={`Slider image ${index}`}
              type="large"
            />
          </Cell>
        ))}
      </Grid>
    </PageContainer>
  );
};
