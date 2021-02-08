import React from "react";
import styled from "styled-components/macro";

const Minus = styled.svg`
  height: 24px;
`;

export const IconMinus = ({ className }) => {
  return (
    <Minus
      className={className}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256,512A256,256,0,0,1,75,75,256,256,0,0,1,437,437,254.33,254.33,0,0,1,256,512Zm0-472C136.9,40,40,136.9,40,256s96.9,216,216,216,216-96.9,216-216S375.1,40,256,40ZM366,236H146v40H366Z" />
    </Minus>
  );
};
