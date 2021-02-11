import React from "react";
import styled, { keyframes } from "styled-components/macro";

// open animation
const show = keyframes`
  from {transform: translateX(-100%)}
  to {transform: translateX(0%)}
`;

export const Drawer = styled.aside`
  position: fixed;
  width: 400px;
  top: 0;
  bottom: 0;
  overflow-y: auto;

  background: #fff;
  z-index: 25;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  // open the drawer with animation, runs once
  animation: ${show} 0.5s;

  // closing the drawer with transform
  transition: 0.5s;
  transform: ${({ animateDrawer }) =>
    animateDrawer ? "translateX(-100%)" : "translateX(0%)"};
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;

  padding: 20px 40px;

  & h1 {
    text-align: center;
    font-size: 36px;
  }
`;

export const StyledDrawer = ({ animateDrawer, children }) => {
  return (
    // sending animateDrawer to styled component as true on close
    <Drawer animateDrawer={animateDrawer}>
      <StyledArticle>{children}</StyledArticle>
    </Drawer>
  );
};
