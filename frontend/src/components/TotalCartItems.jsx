import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components/macro";

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  margin-top: -22px;
  margin-left: -10px;
`;

const NumberOfItems = styled.p`
  font-size: 12px;
  color: #fff;
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
