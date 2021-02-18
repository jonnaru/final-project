import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  z-index: 7;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 1);

  &::after {
    content: "";
    position: absolute;

    border-radius: 50%;
    width: 120px;
    height: 120px;

    border: 20px solid #000;
    border-color: #000 transparent #000 transparent;

    animation: ${rotate} 1s linear infinite;
  }
`;

export const LoadingSpinner = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);

  return <>{isLoading && <Loading />}</>;
};
