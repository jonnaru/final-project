import styled from "styled-components/macro";

export const ProductPageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;

  & article {
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
`;
