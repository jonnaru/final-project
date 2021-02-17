import styled from "styled-components/macro";

export const DropDownHeader = styled.div`
  padding: 6px 20px;
  border: 1px solid #000;

  &:hover {
    background: #000;
    color: #f1f1f1;
    transition: 0.1s ease-out;
  }

  @media (max-width: 667px) {
    margin: 10px 0 10px;
    width: 100px;
    padding: 4px 8px;
    font-size: 12px;

    &:hover {
      background: none;
      color: #000;
    }
  }
`;
