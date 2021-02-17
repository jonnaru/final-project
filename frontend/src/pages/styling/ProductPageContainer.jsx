import styled from "styled-components/macro";

export const ProductPageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;

  & article,
  picture {
    width: 50%;
    object-fit: cover;
  }

  & img {
    height: 900px;
    width: 100%;
    object-fit: cover;
    margin-bottom: -4px;
    padding: 10px;
  }

  @media (max-width: 1024px) {
    & article,
    picture {
      width: 100%;
      height: 100%;
    }

    & img {
      height: 100% !important;
    }
  }

  @media (max-width: 667px) {
    & img {
      width: 100%;
      height: 100%;
      padding: 5px 0;
    }
  }
`;
