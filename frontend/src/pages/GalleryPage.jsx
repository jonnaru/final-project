import React, { useEffect, useState } from "react";
import { Grid, Cell } from "styled-css-grid";
import { useDispatch } from "react-redux";

import { ui } from "../reducers/ui";
import { getGalleryImages } from "../shared/getGalleryImages";

import { PageContainer } from "./styling/PageContainer";
import { GalleryImage } from "./styling/GalleryImage";

export const GalleryPage = () => {
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const { setIsLoading } = ui.actions;

  const handleLoadingChange = (loading) => {
    dispatch(setIsLoading(loading));
  };

  useEffect(() => {
    getGalleryImages(setImages, handleLoadingChange);
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
            <GalleryImage
              src={`https:${images[0]?.fields.file.url}`}
              alt={`Gallery main image`}
              type="large"
            />
          </Cell>
          {images?.slice(1).map((image, index) => (
            <Cell width={2} height={4}>
              <GalleryImage
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
