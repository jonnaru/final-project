import React from "react";

import styled from "styled-components/macro";

const Heart = styled.svg`
  height: 32px;
  width: 32px;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const IconHeart = ({ className, onClick }) => {
  return (
    <Heart
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 426.09"
      className={className}
      onClick={onClick}
    >
      <path
        class="cls-1"
        fill="#ccc"
        d="M471.67,39.5C446.52,14,411.83,0,374,0c-52.94,0-93.74,25.48-118,73.71C231.74,25.48,190.94,0,138,0c-37.83,0-72.51,14-97.67,39.5C14,66.22,0,102.79,0,145.27c0,51,32.38,107,96.23,166.61,57.89,54,121.34,92,133.47,99,5.06,2.94,16.31,9.43,16.31,9.43l10,5.77,10-5.77s11.24-6.49,16.29-9.43c12.13-7.05,75.58-45,133.48-99C479.62,252.27,512,196.22,512,145.27,512,102.79,498.05,66.22,471.67,39.5Z"
      />
      <path
        class="cls-2"
        fill="#fff"
        d="M388.47,282.63c-54.76,51.11-114.8,87-126.29,93.68L256,379.9l-6.19-3.59c-11.48-6.67-71.53-42.56-126.29-93.68S40,184.13,40,145.27C40,83.29,80.3,40,138,40c37.54,0,64.3,16.62,81.83,50.82C233.89,118.26,236,146.71,236,147l.77-.06H276c0-.27,2.15-28.11,15.72-55.14C308.93,57.42,336.63,40,374,40c57.7,0,98,43.29,98,105.27,0,38.82-28.88,86.32-83.53,137.32Z"
      />
    </Heart>
  );
};
