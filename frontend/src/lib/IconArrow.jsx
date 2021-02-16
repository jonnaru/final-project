import React from "react";
import styled from "styled-components/macro";

const Arrow = styled.svg`
  width: 24px;
  margin-right: 6px;

  @media (max-width: 667px) {
    width: 20px;
  }
`;

export const IconArrow = () => {
  return (
    <Arrow
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 248"
    >
      <title>left-arrow</title>
      <path
        d="M492,236H68.44l70.17-69.82a20,20,0,0,0-28.22-28.36L5.88,241.82a0,0,0,0,1,0,0,20,20,0,0,0,0,28.32l0,0,104.51,104a20,20,0,0,0,28.21-28.36L68.44,276H492a20,20,0,0,0,0-40Z"
        transform="translate(0 -132)"
        fill="#000"
      />
    </Arrow>
  );
};
