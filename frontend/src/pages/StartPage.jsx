import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createClient } from "contentful";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ui } from "../reducers/ui";

import { StartPageLogo } from "../lib/StartPageLogo";
import { StartPageImgSlider } from "./styling/StartPageImgSlider";

// to thunk
const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

export const StartPage = () => {
  const showNav = useSelector((store) => store.ui.showNav);
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const { setShowNav } = ui.actions;

  const BrandId = "4QooFrW7W3oRtVqjitZaw2";
  useEffect(() => {
    // to thunk
    client
      .getEntry(BrandId)
      .then((brand) => {
        console.log("brand", brand);
        setImages(brand.fields.slider);
      })
      .catch((error) => {
        console.log("error", error);
      });
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
          />
        ))}
      </Fade>
    </>
  );
};
