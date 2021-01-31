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

export const ProductCard = ({
  itemTitle,
  price,
  color,
  measurements,
  description,
  materialCare,
  quantity,
}) => {
  return (
    <Product>
      <h1>{itemTitle}</h1>
      <h2>{price}</h2>
      <h2>{color}</h2>
      <h2>{measurements}</h2>
      <h2>{`Quantity: ${quantity}`}</h2>
      <PrimaryButton
        disabled={quantity < 1}
        title="Add to basket"
        onClick={() => console.log("click")}
      />
      <p>{description}</p>
      <p>{materialCare}</p>
    </Product>
  );
};
