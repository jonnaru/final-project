import React from "react";
import styled from "styled-components/macro";

const Exit = styled.svg`
  position: absolute;
  top: 10px;
  left: 362px;
  height: 28px;
  width: 28px;
`;

export const IconExit = () => {
  return (
    <Exit
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M512,30.17,481.83,0,256,225.83,30.17,0,0,30.17,225.83,256,0,481.83,30.17,512,256,286.17,481.83,512,512,481.83,286.17,256Z"
        transform="translate(0 0)"
      />
    </Exit>
  );
};
