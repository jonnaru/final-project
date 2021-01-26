import React from "react";
import styled from "styled-components/macro";

const StyledInput = styled.input`
  width: 200px;
  font-size: 16px;
  margin-top: 30px;
  padding-left: 10px;
  height: 32px;
  font-family: Arial, Helvetica, sans-serif;
  background: #f1f1f1;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 4px;
  &::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
`;

export const TextInput = ({ placeholder, onChange, value, type }) => (
  <StyledInput
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type="text"
  />
);
