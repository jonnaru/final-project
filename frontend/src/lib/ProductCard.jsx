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
  sample,
}) => {
  return (
    <Product>
      <h1>{itemTitle}</h1>
      <h2>{`${price} SEK`}</h2>
      <h2>{`Glazing: ${color}`}</h2>
      <h2>{`Measurements: ${measurements}`}</h2>
      <h2>{`${quantity < 1 ? "Sold out" : `Quantity: ${quantity}`}`}</h2>
      {sample && <p>This is a sample item</p>}
      <PrimaryButton
        disabled={quantity < 1}
        title="Add to basket"
        onClick={() => console.log("click")}
      />
      <p>{description}</p>
      <p>{`Item Care: ${materialCare}`}</p>
    </Product>
  );
};
