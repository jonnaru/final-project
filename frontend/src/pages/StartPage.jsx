import React, { useState } from "react";
import styled from "styled-components/macro";

import { Nav } from "../components/Nav";

const StartPageContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: paleturquoise;
`;

const Logo = styled.h2`
  font-size: 80px;
`;

export const StartPage = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <StartPageContainer>
      <Logo onMouseEnter={() => setShowNav(true)}>shop-name</Logo>
      {showNav && <Nav closeNav={() => setShowNav(false)} />}
    </StartPageContainer>
  );
};
