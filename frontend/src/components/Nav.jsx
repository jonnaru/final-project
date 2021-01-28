import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { Backdrop } from "./styling/Backdrop";

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavLink = styled.li`
  font-size: 120px;
  margin: 0;
  text-align: center;
  cursor: pointer;
  & a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: grey;
    }
  }
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border: 2px solid black;
  z-index: 10;
`;

export const Nav = ({ closeNav }) => {
  return (
    <>
      <StyledNav onMouseLeave={closeNav}>
        <NavList>
          <NavLink>
            <Link to="/gallery">gallery</Link>
          </NavLink>
          <NavLink>
            <Link to="/shop">shop</Link>
          </NavLink>
          <NavLink>
            <Link to="/cart">cart</Link>
          </NavLink>
          <NavLink>
            <Link to="/contact">contact</Link>
          </NavLink>
        </NavList>
      </StyledNav>
      <Backdrop onClick={closeNav} />
    </>
  );
};
