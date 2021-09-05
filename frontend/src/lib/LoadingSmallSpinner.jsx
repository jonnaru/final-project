import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 200;
`;

const Loading = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;

  border: 10px solid #000;
  border-color: #000 transparent #000 transparent;

  animation: ${rotate} 1s linear infinite;
`;

export const LoadingSmallSpinner = () => {
  return (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  );
};
