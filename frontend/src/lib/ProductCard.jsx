import React from "react";
import { useDispatch } from "react-redux";
import { cart } from "../reducers/cart";
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

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Product>
      <h1>{product.title}</h1>
      <h2>{`${product.price} SEK`}</h2>
      <h2>{`Glazing: ${product.color}`}</h2>
      <h2>{`Measurements: ${product.measurements}`}</h2>
      <h2>
        {product.inStock < 1 ? "Sold out" : `Quantity: ${product.inStock}`}
      </h2>
      {product.sample && <p>This is a sample item</p>}
      <PrimaryButton
        disabled={product.inStock < 1}
        title="Add to basket"
        onClick={() => dispatch(cart.actions.addItem({ product: product }))}
      />
      <p>{product.description}</p>
      <p>{`Item Care: ${product.materialCare}`}</p>
    </Product>
  );
};
