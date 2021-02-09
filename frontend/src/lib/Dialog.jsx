import React from "react";
import styled from "styled-components/macro";
import { PrimaryButton } from "./PrimaryButton";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.drawer ? "400px" : "0")};
  right: 0;
  text-align: center;
  /* overflow-y: auto; */
  background: rgba(0, 0, 0, 0.4);

  z-index: 100;
  text-transform: uppercase;

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
  background: #fff;
  padding: 20px 40px;
  max-width: 304px;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
`;

const SecondaryText = styled.p`
  font-size: 18px;
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
