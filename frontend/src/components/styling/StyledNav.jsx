import styled from "styled-components/macro";

export const StyledNav = styled.nav`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
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
      text-transform: lowercase;
      font-weight: 700;
      letter-spacing: 4px;
      text-align: center;
      cursor: pointer;

      @media (max-width: 667px) {
        font-size: 80px;
        letter-spacing: 2px;
        padding: 10px;
      }

      & a {
        text-decoration: none;
        padding: 20px;
        color: #000;

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
