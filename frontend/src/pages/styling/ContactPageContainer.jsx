import styled from "styled-components/macro";

export const ContactPageContainer = styled.div`
  padding: 10px;

  & h3 {
    font-size: 64px;
    margin: 0;

    @media (max-width: 667px) {
      font-size: 32px;
    }
  }

  & p {
    font-size: 64px;
    margin: 0;
    margin-bottom: 50px;

    @media (max-width: 667px) {
      font-size: 32px;
    }
  }

  & a {
    display: inline-block;
    color: inherit;

    &:hover {
      text-decoration: none;
      color: #ccc;
    }
  }
`;
