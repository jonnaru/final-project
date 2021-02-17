import styled from "styled-components/macro";

export const DropDownContainer = styled.article`
  position: absolute;
  top: -60px;

  width: 130px;
  padding-left: 10px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 9;
  text-align: center;

  @media (max-width: 667px) {
    top: -42px;
  }
`;
