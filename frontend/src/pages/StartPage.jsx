import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ui } from "../reducers/ui";
import { getStartImages } from "../shared/getStartImages";

import { StartPageLogo } from "../lib/StartPageLogo";
import { StartPageImgSlider } from "./styling/StartPageImgSlider";

export const StartPage = () => {
  const showNav = useSelector((store) => store.ui.showNav);
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const { setShowNav } = ui.actions;

  useEffect(() => {
    getStartImages(setImages);
  }, []);

  return (
    <>
      {!showNav && (
        <StartPageLogo
          onMouseEnter={() => dispatch(setShowNav(true))}
          onClick={() => dispatch(setShowNav(true))}
        />
      )}
      <Fade
        autoplay
        duration={1000}
        transitionDuration={500}
        arrows={false}
        pauseOnHover={false}
        canSwipe={false}
        Easing={"ease"}
      >
        {images.map((image, index) => (
          <StartPageImgSlider
            src={`https:${image.fields.file.url}`}
            alt={`Slider image ${index}`}
            key={image.fields.file.url}
          />
        ))}
      </Fade>
    </>
  );
};
