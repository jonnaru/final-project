import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  background: ${(props) => (props.small ? "none" : "#000")};
  padding: 6px 20px;
  margin: 20px 0;
  margin-left: ${(props) => (props.small ? "2px " : "0")};
  width: ${(props) => (props.small ? "120px" : "100%")};
  font-size: ${(props) => (props.small ? "14px" : "22px")};
  border: 1px solid #000;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.small ? "#000" : "#fff")};

  &:hover {
    background: ${(props) => (props.small ? "#101010;" : "#fff")};
    color: ${(props) => (props.small ? "#f1f1f1;" : "#101010")};
    transition: 0.1s;

    & path {
      fill: #fff;
    }
  }

  &:disabled {
    background: #ccc;
    border: #ccc;
    color: #fff;
    cursor: unset;
  }
`;

export const PrimaryButton = ({ title, onClick, small, icon, disabled }) => {
  return (
    <StyledButton
      type="button"
      small={small}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && icon} {title}
    </StyledButton>
  );
};
