import styled from "styled-components/macro";

export const StyledTotalItems = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 50%;
  height: 18px;
  width: 18px;

  top: -4px;
  left: 22px;

  @media (max-width: 667px) {
    height: 14px;
    width: 14px;
    top: -2px;
  }

  & p {
    font-size: 12px;
    color: #fff;
    @media (max-width: 667px) {
      font-size: 8px;
    }
  }
`;
