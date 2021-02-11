import styled from "styled-components/macro";

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1380px;
  padding: 14px 0 40px 0;
  height: 80px;
  margin: auto;
  text-align: center;

  border-top: 4px solid #000;

  & p {
    margin: 0;
    font-size: 14px;
    text-transform: lowercase;
    font-family: Arial, Helvetica, sans-serif;
  }
  /* font-weight: bold; */

  & a {
    color: inherit;
  }

  &:hover a {
    text-decoration: none;
  }
`;
