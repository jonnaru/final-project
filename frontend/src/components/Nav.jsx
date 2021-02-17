import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ui } from "../reducers/ui";

import { StyledNav } from "./styling/StyledNav";
import { Backdrop } from "../lib/Backdrop";

export const Nav = () => {
  const showNav = useSelector((store) => store.ui.showNav);

  const dispatch = useDispatch();
  const { setShowNav } = ui.actions;

  if (!showNav) return <></>;

  return (
    <>
      <StyledNav onMouseLeave={() => dispatch(setShowNav(false))}>
        <ul onClick={() => dispatch(setShowNav(false))}>
          <li>
            <Link to="/gallery">gallery</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </StyledNav>
      <Backdrop onClick={() => dispatch(setShowNav(false))} />
    </>
  );
};
