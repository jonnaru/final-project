import styled from "styled-components/macro";

export const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  top: 0;
  padding: 10px 20px 40px;
  width: 100%;
  max-width: 1400px;
  z-index: 8;

  @media (max-width: 1024px) {
  }

  @media (max-width: 667px) {
    padding: 10px 10px 30px;
    flex-direction: column-reverse;
    align-items: initial;
  }
`;
