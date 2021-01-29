import styled from "styled-components/macro";

export const StyledNav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  z-index: 10;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 20px;

    & li {
      display: block;
      font-size: 120px;
      margin: 0;
      padding: 20px;
      text-transform: lowercase;
      font-weight: 700;
      letter-spacing: 4px;
      text-align: center;
      cursor: pointer;
      & a {
        text-decoration: none;
        color: #000;
      }
      &:hover {
        background: #fff;
        font-style: italic;
      }
    }
  }
`;
