import React from "react";
import styled from "styled-components/macro";
import { PrimaryButton } from "./PrimaryButton";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  text-align: center;
  text-transform: uppercase;
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
`;

const SecondaryText = styled.p`
  font-size: 18px;
  text-transform: lowercase;
`;

export const Dialog = ({
  title,
  onClose,
  buttonText,
  secondaryText,
  secondaryButtonText,
  drawer,
}) => (
  <BackgroundContainer drawer={drawer}>
    <DialogContainer>
      {title && <Title>{title}</Title>}
      {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}

      <div>
        {buttonText && (
          <PrimaryButton small title={buttonText} onClick={onClose} />
        )}
        {secondaryButtonText && (
          <PrimaryButton small title={secondaryButtonText} onClick={onClose} />
        )}
      </div>
    </DialogContainer>
  </BackgroundContainer>
);
