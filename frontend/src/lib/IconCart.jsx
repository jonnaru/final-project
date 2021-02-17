import React from "react";
import styled from "styled-components/macro";

const Cart = styled.svg`
  height: 30px;
  cursor: pointer;

  &:hover path {
    opacity: 0.3;
    transition: 0.1s ease-out;
  }

  @media (max-width: 667px) {
    height: 22px;
    margin-left: 6px;
    margin-top: 3px;
  }
`;

export const IconCart = ({ onClick }) => {
  return (
    <Cart
      onClick={onClick}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 450"
    >
      <title>shopping-cart</title>
      <path
        d="M165,331H437a15,15,0,0,0,14.42-10.88l60-210A15,15,0,0,0,497,91H130.37L119.64,42.75A15,15,0,0,0,105,31H15a15,15,0,0,0,0,30H93l54.15,243.71A45,45,0,0,0,165,391H437a15,15,0,0,0,0-30H165a15,15,0,0,1,0-30ZM477.11,121,425.68,301H177L137,121Z"
        transform="translate(0 -31)"
      />
      <path
        d="M150,436a45,45,0,1,0,45-45A45.05,45.05,0,0,0,150,436Zm45-15a15,15,0,1,1-15,15A15,15,0,0,1,195,421Z"
        transform="translate(0 -31)"
      />
      <path
        d="M362,436a45,45,0,1,0,45-45A45.05,45.05,0,0,0,362,436Zm45-15a15,15,0,1,1-15,15A15,15,0,0,1,407,421Z"
        transform="translate(0 -31)"
      />
    </Cart>
  );
};
