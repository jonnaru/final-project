import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { cart } from "../../reducers/cart";

import { IconMinus } from "../../lib/IconMinus";

const CardContainer = styled.div`
  padding: 0 0 36px 0;

  & img {
    width: 100%;
    margin-bottom: 8px;
  }

  & h1 {
    text-align: left;
    text-transform: uppercase;
    font-size: 24px;
  }

  & p {
    margin: 4px 0;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <img
        src={product.thumb.fields.file.url}
        alt={product.thumb.fields.title}
      />
      <ContentContainer>
        <h1>{product.title}</h1>
        <Button
          type="button"
          onClick={() => dispatch(cart.actions.removeItem(product))}
        >
          <IconMinus />
        </Button>
      </ContentContainer>
      <ContentContainer>
        <p>Quantity: {product.cartQuantity}</p>
        <p style={{ textAlign: "right" }}>
          {product.price * product.cartQuantity} SEK
        </p>
      </ContentContainer>
    </CardContainer>
  );
};
