import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";
import { CartItemCard } from "./CartItemCard";

const CartList = styled.ul`
  padding: 0;
`;

export const CartCard = () => {
  const products = useSelector((store) => store.cart.items);
  return (
    <CartList>
      {products.map((product) => (
        <CartItemCard key={product.id} product={product} />
      ))}
    </CartList>
  );
};
