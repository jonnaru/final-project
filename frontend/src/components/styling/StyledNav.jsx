import styled from "styled-components/macro";

export const StyledNav = styled.nav`
  position: fixed;
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 20px;

    & li {
      display: block;
      font-size: 120px;
      margin: 0;
      padding: 20px;
      font-weight: 700;
      letter-spacing: 4px;
      text-transform: lowercase;
      text-align: center;
      cursor: pointer;

      @media (max-width: 667px) {
        padding: 10px;
        font-size: 80px;
        letter-spacing: 2px;
      }

      & a {
        padding: 20px;
        color: #000;
        text-decoration: none;

        @media (max-width: 667px) {
          padding: 10px;
        }
      }

      &:hover {
        background: #fff;
        font-style: italic;
      }
    }
  }
`;
