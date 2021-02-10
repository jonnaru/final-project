import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "../../reducers/cart";
import styled from "styled-components/macro";

import { PrimaryButton } from "../../lib/PrimaryButton";

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
  const [buttonTitle, setButtonTitle] = useState("Add to basket");

  const dispatch = useDispatch();
  const productsInCart = useSelector((store) => store.cart.items);

  const inStock = () => {
    const itemInCart = productsInCart.find(
      (itemInCart) => itemInCart.id === product.id
    );

    if (itemInCart) return product.inStock - itemInCart.cartQuantity;

    return product.inStock;
  };

  const handleOnClick = () => {
    dispatch(cart.actions.addItem({ product: product }));
    setButtonTitle("Adding");
    setTimeout(() => {
      setButtonTitle("Add to basket");
    }, 1000);
  };

  return (
    <Product>
      <h1>{product.title}</h1>
      <h2>{`${product.price} SEK`}</h2>
      <h2>{`Glazing: ${product.color}`}</h2>
      <h2>{`Measurements: ${product.measurements}`}</h2>
      <h2>{inStock() < 1 ? "" : `In stock: ${inStock()}`}</h2>
      {product.sample && <p>This is a sample item</p>}
      <PrimaryButton
        disabled={inStock() < 1}
        title={inStock() < 1 ? "Out of stock" : buttonTitle}
        onClick={handleOnClick}
      />
      <p>Free shipping over 600 SEK</p>
      <p>{product.description}</p>
      <p>{`Item Care: ${product.materialCare}`}</p>
    </Product>
  );
};
