import React from "react";
import styled from "styled-components/macro";

import { PageContainer } from "./styling/PageContainer";
import { ProductCard } from "../lib/ProductCard";

const ProductPageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const ProductArticle = styled.article`
  /* border: 1px solid grey; */
  width: 50%;
  object-fit: cover;
`;

const Image = styled.img`
  height: 900px;
  width: 100%;
  object-fit: cover;
  margin-bottom: -4px;
  padding: 10px;
`;

export const ProductPage = () => {
  return (
    <PageContainer>
      <ProductPageContainer>
        <ProductArticle>
          <Image
            src={`https://source.unsplash.com/collection/76205006?random=${Math.random()}`}
            alt="hej"
          />
        </ProductArticle>

        <ProductArticle>
          <ProductCard
            itemTitle="Product Name"
            price="123 SEK"
            color="Colour: Nice colour"
          />
        </ProductArticle>

        <ProductArticle>
          <Image
            style={{ height: "500px" }}
            src={`https://source.unsplash.com/collection/76205006?random=${Math.random()}`}
            alt="hej"
          />
        </ProductArticle>

        <ProductArticle>
          <Image
            style={{ height: "500px" }}
            src={`https://source.unsplash.com/collection/76205006?random=${Math.random()}`}
            alt="hej"
          />
        </ProductArticle>

        <ProductArticle>
          <Image
            style={{ height: "500px" }}
            src={`https://source.unsplash.com/collection/76205006?random=${Math.random()}`}
            alt="hej"
          />
        </ProductArticle>
      </ProductPageContainer>
    </PageContainer>
  );
};
