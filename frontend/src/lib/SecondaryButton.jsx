import React from "react";
import styled from "styled-components/macro";

const CustomButton = styled.button`
  background: none;
  border: none;
  outline: none;
  text-align: left;
  padding: 0;

  font-size: 16px;
  color: #000;
  text-decoration: underline;
  font-family: Arial, Helvetica, sans-serif;

  cursor: pointer;

  &:hover {
    color: #6b6b6b;
    text-decoration: none;
  }
`;

export const SecondaryButton = ({ title, onClick }) => {
  return <CustomButton onClick={onClick}>{title}</CustomButton>;
};
