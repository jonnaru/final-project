import React from "react";
import { Grid, Cell } from "styled-css-grid";
import styled from "styled-components/macro";

import { PageContainer } from "./styling/PageContainer";

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const GalleryPage = () => {
  return (
    // Will map this:
    <PageContainer>
      <Grid
        flow="row dense"
        columns="repeat(auto-fit,minmax(200px,1fr))"
        gap="20px"
      >
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/200x400?random=${Math.random()}`}
            alt="hej"
            type="large"
          />
        </Cell>
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/380x580?random=${Math.random()}`}
            alt="hej"
          />
        </Cell>
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/400x300?random=${Math.random()}`}
            alt="hej"
          />
        </Cell>
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/200x400?random=${Math.random()}`}
            alt="hej"
          />
        </Cell>
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/380x580?random=${Math.random()}`}
            alt="hej"
          />
        </Cell>
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/400x300?random=${Math.random()}`}
            alt="hej"
          />
        </Cell>
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/200x400?random=${Math.random()}`}
            alt="hej"
          />
        </Cell>
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/380x580?random=${Math.random()}`}
            alt="hej"
          />
        </Cell>
        <Cell>
          <Image
            src={`https://source.unsplash.com/collection/76205006/400x300?random=${Math.random()}`}
            alt="hej"
          />
        </Cell>
      </Grid>
    </PageContainer>
  );
};
