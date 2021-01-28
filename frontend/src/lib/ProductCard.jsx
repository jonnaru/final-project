import React from "react";
import styled from "styled-components/macro";

import { PrimaryButton } from "./PrimaryButton";

const Product = styled.div`
  padding: 40px;

  & h1 {
    font-size: 42px;
    text-transform: uppercase;
  }
  & h2 {
    font-size: 20px;
    font-weight: normal;
    color: #6b6b6b;
  }
`;

export const ProductCard = ({ itemTitle, price, color, title }) => {
  return (
    <Product>
      <h1>{itemTitle}</h1>
      <h2>{price}</h2>
      <h2>{color}</h2>
      <PrimaryButton title="Add to basket" />
      <p>
        Here will be some text for description, material, details and caretaking{" "}
      </p>
    </Product>
  );
};