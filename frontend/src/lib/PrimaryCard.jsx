import React from "react";
import styled from "styled-components/macro";

import { IconHeart } from "./IconHeart";

const Container = styled.article`
  /* border: 1px solid black; */
  background: #fff;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 36px;
`;

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CoverImage = styled.img`
  width: 100%;
  padding: 0 10px;
`;

const Content = styled.div`
  padding: 10px;
`;

const ChildrenContent = styled.div`
  background: #f1f1f1;
  padding: 20px;
`;

const Heart = styled(IconHeart)`
  &:hover {
    fill: pink;
  }
`;

export const PrimaryCard = ({
  title,
  secondaryText,
  coverImage,
  className,
  children,
}) => (
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}

    <Content>
      <TitleBar>
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
        <Heart />
      </TitleBar>

      {children && <ChildrenContent>{children}</ChildrenContent>}
    </Content>
  </Container>
);
