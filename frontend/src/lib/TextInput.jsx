import React from "react";
import styled from "styled-components/macro";

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  padding-left: 10px;

  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  background: none;
  border: 1px solid #000;
  outline: none;

  &::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #ccc;
  }

  &:last-child {
    padding-bottom: 20px;
  }
`;

export const TextInput = ({ placeholder, onChange, value, type }) => (
  <StyledInput
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
  />
);
