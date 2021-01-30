import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { IconHeart } from "./IconHeart";

const Container = styled.article`
  /* border: 1px solid black; */
  background: #fff;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 0;
  color: #000;
  text-transform: lowercase;
  /* font-style: italic; */
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

  &:hover {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  padding: 10px;
`;

const ChildrenContent = styled.div`
  background: #f1f1f1;
  padding: 20px;
`;

// doesn't work
const Heart = styled(IconHeart)`
  &:hover svg {
    fill: pink;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover h3 {
    text-decoration: underline;
  }
`;

export const ShopCard = ({
  title,
  secondaryText,
  coverImage,
  className,
  children,
  id,
}) => (
  <Container className={className}>
    <StyledLink to={`/product/${id}`}>
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
    </StyledLink>
  </Container>
);
