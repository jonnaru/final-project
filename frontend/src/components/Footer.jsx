import React from "react";
import { useLocation } from "react-router-dom";
import { FooterContainer } from "./styling/FooterContainer";

export const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/") return <></>;
  return (
    <FooterContainer>
      <p>
        Drejad.studio is based in Stockholm, Sweden. All pieces are carefully
        handmade in stoneware. Email{" "}
        <a href="mailto:hello@drejad.studios" target="_blank" rel="noreferrer">
          hello@drejad.studio
        </a>{" "}
        for international shipping, custom order-inquires or other questions.
      </p>
    </FooterContainer>
  );
};
