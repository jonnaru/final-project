import React from "react";
import styled from "styled-components/macro";

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavLink = styled.li`
  font-size: 72px;
  margin: 0;
  text-align: center;
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  border: 2px solid black;
`;

const NavBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Nav = ({ closeNav }) => {
  return (
    <NavBackdrop onClick={closeNav}>
      <StyledNav onMouseLeave={closeNav}>
        <NavList>
          <NavLink>hej</NavLink>
          <NavLink>hej</NavLink>
          <NavLink>hej</NavLink>
          <NavLink>hej</NavLink>
          <NavLink>hej</NavLink>
        </NavList>
      </StyledNav>
    </NavBackdrop>
  );
};
