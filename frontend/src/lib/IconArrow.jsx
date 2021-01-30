import React from "react";
import styled from "styled-components/macro";

const Arrow = styled.svg`
  transform: rotate(180deg);
`;

export const IconArrow = () => {
  return (
    <Arrow
      width="14"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="pmzxns-3 gLXOYg"
    >
      <path
        stroke="#000"
        stroke-width="6"
        d="M.631 19h46.646M26.717 37.569l20.273-18.45M28.318 1.213l20.275 18.448"
      ></path>
    </Arrow>
  );
};
