import React from "react";
import styled from "styled-components/macro";

import { PageContainer } from "./styling/PageContainer";
import { PrimaryCard } from "../lib/PrimaryCard";

const ShopContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const ShopCard = styled(PrimaryCard)`
  width: 25%;
`;

export const ShopPage = () => {
  return (
    <PageContainer>
      <h2>this is a shop</h2>
      <ShopContainer>
        <ShopCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ShopCard>

        <ShopCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ShopCard>

        <ShopCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ShopCard>

        <ShopCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ShopCard>

        <ShopCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ShopCard>

        <ShopCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ShopCard>

        <ShopCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ShopCard>

        {/* <PrimaryCard
          title="Only a title"
          secondaryText="And a secondary text"
        />

        <PrimaryCard>
          <h1>Hello from children</h1>
        </PrimaryCard> */}
      </ShopContainer>
    </PageContainer>
  );
};
