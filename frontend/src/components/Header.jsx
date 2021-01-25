import React, { useState } from "react";
import styled from "styled-components/macro";

import { Nav } from "./Nav";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border: 2px solid black;
`;

const Logo = styled.h1`
  margin-right: 20px;
  font-size: 52px;

  &:hover {
    color: red;
  }
`;

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Logo onMouseEnter={() => setShowNav(true)}>hello</Logo>
        {showNav && <Nav closeNav={() => setShowNav(false)} />}
      </HeaderContainer>
    </>
  );
};
