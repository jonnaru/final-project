import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { ui } from "../reducers/ui";
import { StartPageContainer } from "./styling/StartPageContainer";
import { StartPageLogo } from "../lib/StartPageLogo";

const images = [
  "http://images.ctfassets.net/u1hj1odlv53m/xJzg7D8OiQSOtndH7TBsK/4298e811913707d658f76b67836993c8/shop_122.jpg",
  "http://images.ctfassets.net/u1hj1odlv53m/6gpgc2Mj4Bod07ybmW2MNU/6fe2d16333569ffd6fd0a64aa317ce7d/shop_112.jpg",
];

export const StartPage = () => {
  const showNav = useSelector((store) => store.ui.showNav);

  const dispatch = useDispatch();
  const { setShowNav } = ui.actions;

  return (
    <StartPageContainer>
      {!showNav && (
        <StartPageLogo onMouseEnter={() => dispatch(setShowNav(true))} />
      )}
    </StartPageContainer>
  );
};
