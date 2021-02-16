import styled from "styled-components/macro";

export const ProfileItemsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 75%;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
