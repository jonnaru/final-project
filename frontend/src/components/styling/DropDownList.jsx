import styled from "styled-components/macro";

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  border-top: none;
  text-align: left;

  &:first-child {
    padding-top: 10px;
  }

  & li {
    list-style: none;
    padding: 10px 0;
    padding-left: 8px;

    &:hover {
      background: #fff;
      transition: 0.1s ease-out;
    }

    @media (max-width: 667px) {
      font-size: 12px;
      padding: 6px 0;
      padding-left: 8px;
    }
  }
`;
