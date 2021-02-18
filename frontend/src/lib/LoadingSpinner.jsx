import React from "react";
import styled from "styled-components/macro";
import { useSelector } from "react-redux";

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
  animation: wait 1s linear infinite;
  animation-delay: 0.1s; /* waits 0.1s before displaying, to not flicker */

  @keyframes wait {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;

    border-radius: 50%;
    width: 120px;
    height: 120px;

    border: 20px solid #000;
    border-color: #000 transparent #000 transparent;

    animation: rotate 1s linear infinite;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const LoadingSpinner = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);

  return <>{isLoading && <Loading />}</>;
};
