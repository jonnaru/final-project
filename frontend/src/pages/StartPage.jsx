import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import CrossfadeImage from "react-crossfade-image";

import { ui } from "../reducers/ui";
import { StartPageContainer } from "./styling/StartPageContainer";
import { StartPageLogo } from "../lib/StartPageLogo";

export const StartPage = () => {
  const showNav = useSelector((store) => store.ui.showNav);

  const dispatch = useDispatch();
  const { setShowNav } = ui.actions;

  return (
    <StartPageContainer>
      <CrossfadeImage
        src={"https://source.unsplash.com/collection/76205006/2500x1400"}
      />
      {!showNav && (
        <StartPageLogo onMouseEnter={() => dispatch(setShowNav(true))}>
          shop-name
        </StartPageLogo>
      )}
    </StartPageContainer>
  );
};
