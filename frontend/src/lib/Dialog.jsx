import React from "react";
import styled from "styled-components/macro";
import { PrimaryButton } from "./PrimaryButton";
import { Link } from "./Link";
import { LoadingSmallSpinner } from "./LoadingSmallSpinner";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  text-align: center;
  background: rgba(0, 0, 0, 0.4);

  z-index: 100;

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;

const DialogContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  max-width: 304px;

  background: #fff;
  padding: 20px 40px;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: lighter;
  text-transform: uppercase;
`;

const SecondaryText = styled.p`
  font-size: 18px;
  text-transform: lowercase;
`;

const LoadingText = styled.p`
  text-transform: uppercase;
`;

const Image = ({ img, altText, loadingText }) => {
  if (img) return <img width="200" src={img} alt={altText} />;
  return (
    <>
      <LoadingSmallSpinner />
      <LoadingText>{loadingText}</LoadingText>
    </>
  );
};

export const Dialog = ({
  title,
  img,
  altText,
  loadingText,
  onClose,
  buttonText,
  secondaryText,
  linkText,
  href,
  drawer,
}) => (
  <BackgroundContainer drawer={drawer}>
    <DialogContainer>
      {title && <Title>{title}</Title>}
      {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}

      {img !== undefined && (
        <Image img={img} altText={altText} loadingText={loadingText} />
      )}
      <div>
        {buttonText && (
          <PrimaryButton small title={buttonText} onClick={onClose} />
        )}
        {linkText && <Link small title={linkText} href={href} />}
      </div>
    </DialogContainer>
  </BackgroundContainer>
);
