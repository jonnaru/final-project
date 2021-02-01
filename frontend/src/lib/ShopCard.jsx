import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { IconHeart } from "./IconHeart";

const Container = styled.article`
  /* border: 1px solid black; */
  position: relative;
  background: #fff;
  padding: 10px;
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
  /* padding: 0 10px; */

  &:hover {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  padding: 10px 0;
`;

const ChildrenContent = styled.div`
  background: #f1f1f1;
  padding: 20px;
`;

const Heart = styled(IconHeart)`
  z-index: 15;
  &:hover path {
    fill: #000;
  }
`;

const TextFlag = styled.p`
  position: absolute;
  z-index: 5;
  right: 0;
  text-align: right;
  margin-top: 12px;

  margin-right: 10px;
  padding: 3px 10px 4px 10px;
  background: ${(props) => (props.sample ? "#fff" : "#000")};
  color: ${(props) => (props.sample ? "#000" : "#fff")};
  font-size: 18px;
  font-style: italic;
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
  quantity,
  id,
  sample,
}) => (
  <Container className={className}>
    {quantity < 1 && <TextFlag>sold out</TextFlag>}
    {sample && <TextFlag sample>sample</TextFlag>}

    <StyledLink to={`/product/${id}`}>
      <CoverImage src={coverImage} />

      <Content>
        <TitleBar>
          <div>
            <Title>{title}</Title>
            <SecondaryText>{`${secondaryText} SEK`}</SecondaryText>
          </div>
          <Heart />
        </TitleBar>
      </Content>
    </StyledLink>
  </Container>
);
