import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { Nav } from "./Nav";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  padding: 0 30px;
`;

const Logo = styled.h1`
  font-size: 52px;
  z-index: 10;
`;

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Link to="/sign-in">sign in</Link>
        <Logo onMouseEnter={() => setShowNav(true)}>shop-name</Logo>
        {showNav && <Nav closeNav={() => setShowNav(false)} />}
      </HeaderContainer>
    </>
  );
};
