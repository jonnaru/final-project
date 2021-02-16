import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components/macro";

const NumberContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  top: 24px;
  left: 190px;

  @media (max-width: 667px) {
    height: 14px;
    width: 14px;
    top: 82px;
    left: 134px;
  }
`;

const NumberOfItems = styled.p`
  font-size: 12px;
  color: #fff;

  @media (max-width: 667px) {
    font-size: 8px;
  }
`;

export const TotalCartItems = () => {
  const productsInCart = useSelector((store) =>
    store.cart.items.reduce((total, item) => total + item.cartQuantity, 0)
  );
  return (
    <>
      {productsInCart === 0 ? (
        <></>
      ) : (
        <NumberContainer>
          <NumberOfItems>{productsInCart}</NumberOfItems>
        </NumberContainer>
      )}
    </>
  );
};
