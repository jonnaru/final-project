import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { user } from "../../reducers/user";

import { IconHeart } from "../../lib/IconHeart";

const Container = styled.article`
  position: relative;
  background: #fff;
  padding: 10px;
  margin-bottom: 20px;

  cursor: pointer;

  & p {
    margin: 0;
    color: #6b6b6b;
  }

  & h3 {
    margin: 0;
    color: #000;
    text-transform: lowercase;
    font-size: 32px;
  }

  &:hover h3 {
    text-decoration: underline;
  }

  & img {
    width: 100%;
  }

  &:hover img {
    opacity: 0.7;
  }
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  padding: 10px 0;
`;

const Heart = styled(IconHeart)`
  padding-top: 4px;
  &:hover path {
    fill: #919191;
  }
`;

const TextFlag = styled.span`
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
`;

export const ShopCard = (props) => {
  const { title, price, coverImage, className, quantity, id, sample } = props;

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

      <StyledLink to={`/product/${id}`}>
        <img src={coverImage} />
      </StyledLink>

      <Content>
        <TitleBar>
          <StyledLink to={`/product/${id}`}>
            <h3>{title}</h3>
          </StyledLink>
          <Heart onClick={() => handleClickLike(id)} />
        </TitleBar>
        <p>{`${price} SEK`}</p>
      </Content>
    </Container>
  );
};
