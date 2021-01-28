import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { PageContainer } from "./styling/PageContainer";
import { ShopCard } from "../lib/ShopCard";

const ShopContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const ItemCard = styled(ShopCard)`
  width: 25%;
`;

export const ShopPage = () => {
  return (
    <PageContainer>
      <ShopContainer>
        <ItemCard
          onClick={<Link to="/product">gallery</Link>}
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

        <ItemCard
          coverImage={`https://source.unsplash.com/collection/76205006/500x300?random=${Math.random()}`}
          title="Item Title"
          secondaryText="123 SEK"
        ></ItemCard>

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
