import React from "react";

import { PageContainer } from "./styling/PageContainer";
import { ProductPageContainer } from "./styling/ProductPageContainer";
import { ProductCard } from "../lib/ProductCard";

export const ProductPage = () => {
  return (
    // Will map this:
    <PageContainer>
      <ProductPageContainer>
        <article>
          <img
            src={`https://source.unsplash.com/collection/76205006?random=${Math.random()}`}
            alt="hej"
          />
        </article>

        <article>
          <ProductCard
            itemTitle="Product Name"
            price="123 SEK"
            color="Colour: Nice colour"
          />
        </article>

        <article>
          <img
            style={{ height: "500px" }}
            src={`https://source.unsplash.com/collection/76205006?random=${Math.random()}`}
            alt="hej"
          />
        </article>

        <article>
          <img
            style={{ height: "500px" }}
            src={`https://source.unsplash.com/collection/76205006?random=${Math.random()}`}
            alt="hej"
          />
        </article>

        <article>
          <img
            style={{ height: "500px" }}
            src={`https://source.unsplash.com/collection/76205006?random=${Math.random()}`}
            alt="hej"
          />
        </article>
      </ProductPageContainer>
    </PageContainer>
  );
};
