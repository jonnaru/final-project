import styled from "styled-components/macro";

export const ProfileCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 25%;

  & p {
    margin: 0;
    line-height: 24px;
  }

  & h1 {
    margin-top: 20px;
    font-size: 42px;
    margin-bottom: 30px;
  }

  & h3 {
    margin-top: 0;
  }

  & span {
    text-transform: capitalize;
  }

  @media (max-width: 1024px) {
    width: 50%;
    align-items: center;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
