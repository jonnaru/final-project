import React from "react";
import { useSelector } from "react-redux";

import { StyledTotalItems } from "./styling/StyledTotalItems";

export const TotalCartItems = () => {
  const productsInCart = useSelector((store) =>
    store.cart.items.reduce((total, item) => total + item.cartQuantity, 0)
  );
  return (
    <>
      {productsInCart === 0 ? (
        <></>
      ) : (
        <StyledTotalItems>
          <p>{productsInCart}</p>
        </StyledTotalItems>
      )}
    </>
  );
};
