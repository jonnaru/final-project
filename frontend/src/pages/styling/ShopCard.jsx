import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { user } from "../../reducers/user";

import { IconHeart } from "../../lib/IconHeart";

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

const Heart = styled(IconHeart)`
  position: absolute;
  z-index: 150;
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
  background: ${(props) => (props.sample ? "#fff" : "#303030")};
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

export const ShopCard = (props) => {
  const {
    title,
    secondaryText,
    coverImage,
    className,
    quantity,
    id,
    sample,
  } = props;

  const accessToken = useSelector((store) => store.user.login.accessToken);

  const dispatch = useDispatch();
  const { handleLike } = user.actions;

  const handleClickLike = (id) => {
    if (accessToken) dispatch(handleLike({ productId: id }));
    console.log("Liked", id);
  };

  return (
    <Container className={className}>
      {quantity < 1 && <TextFlag>sold out</TextFlag>}
      {sample && <TextFlag sample>sample</TextFlag>}
      <Heart onClick={() => handleClickLike(id)} />

      <StyledLink to={`/product/${id}`}>
        <CoverImage src={coverImage} />

        <Content>
          <TitleBar>
            <div>
              <Title>{title}</Title>
              <SecondaryText>{`${secondaryText} SEK`}</SecondaryText>
            </div>
          </TitleBar>
        </Content>
      </StyledLink>
    </Container>
  );
};
