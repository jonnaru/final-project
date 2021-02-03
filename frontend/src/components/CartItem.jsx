import React from "react";
import { useDispatch } from "react-redux";
// import { cart } from "../reducers/cart"

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};
