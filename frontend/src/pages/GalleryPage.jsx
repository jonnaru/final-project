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

  const BrandId = "4QooFrW7W3oRtVqjitZaw2";
  useEffect(() => {
    client
      .getEntry(BrandId)
      .then((brand) => {
        setImages(brand.fields.gallery);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <PageContainer>
      <div style={{ padding: "10px" }}>
        <Grid
          flow="row dense"
          columns="repeat(auto-fit,minmax(160px,1fr))"
          gap="20px"
        >
          <Cell width={2} height={2}>
            <Image
              src={`https:${images[0]?.fields.file.url}`}
              alt={`Gallery main image`}
              type="large"
            />
          </Cell>
          {images?.slice(1).map((image, index) => (
            <Cell width={2} height={4}>
              <Image
                src={`https:${image.fields.file.url}`}
                alt={`Gallery image ${index}`}
                type="large"
              />
            </Cell>
          ))}
        </Grid>
      </div>
    </PageContainer>
  );
};
