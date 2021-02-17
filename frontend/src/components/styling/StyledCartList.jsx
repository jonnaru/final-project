import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

import { StyledCartCard } from "./StyledCartCard";

const CartList = styled.ul`
  padding: 0;
`;

export const StyledCartLIst = () => {
  const products = useSelector((store) => store.cart.items);
  return (
    <CartList>
      {products.map((product) => (
        <StyledCartCard key={product.id} product={product} />
      ))}
    </CartList>
  );
};
