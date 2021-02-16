import styled from "styled-components/macro";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 40px;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  z-index: 8;

  @media (max-width: 1024px) {
  }

  @media (max-width: 667px) {
    padding: 10px 10px 40px;
    flex-direction: column-reverse;
    align-items: initial;
    padding-bottom: 30px;
  }
`;
