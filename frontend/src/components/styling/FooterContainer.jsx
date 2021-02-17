import styled from "styled-components/macro";

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1380px;
  padding: 14px 0 40px;
  height: 80px;
  margin: auto;
  text-align: center;

  border-top: 4px solid #000;

  & p {
    margin: 0;
    font-size: 14px;
    text-transform: lowercase;
    font-family: Arial, Helvetica, sans-serif;

    @media (max-width: 667px) {
      font-size: 12px;
    }
  }

  & a {
    color: inherit;
  }

  &:hover a {
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 14px 10px 40px;
  }
`;
