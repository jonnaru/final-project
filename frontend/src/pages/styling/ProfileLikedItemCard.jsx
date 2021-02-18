import React from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { handleLikeThunk } from "../../reducers/user";

import { IconHeart } from "../../lib/IconHeart";

const CardContainer = styled.article`
  padding: 10px 10px 36px 10px;
  width: 33.33%;
  cursor: pointer;

  & img {
    width: 100%;
    margin-bottom: 8px;
  }

  & h1 {
    text-align: left;
    text-transform: uppercase;
    font-size: 24px;
  }

  & p {
    margin: 0;
  }

  &:hover h1 {
    text-decoration: underline;
  }

  &:hover img {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;

const Heart = styled(IconHeart)`
  padding-top: 4px;
  transition: 0.1s;

  & .cls-1 {
    fill: #000;
  }

  & .cls-2 {
    /* fill: #000; */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ProfileLikedItemCard = (props) => {
  const { title, src, alt, price, id } = props;

  const accessToken = useSelector((store) => store.user.login.accessToken);

  const dispatch = useDispatch();

  const handleLike = (id) => {
    if (accessToken) dispatch(handleLikeThunk(id));
  };

  return (
    <CardContainer>
      <StyledLink to={`/product/${id}`}>
        <img src={src} alt={alt} />
      </StyledLink>
      <ContentContainer>
        <StyledLink to={`/product/${id}`}>
          <h1>{title}</h1>
        </StyledLink>
        <Button type="button" onClick={() => handleLike(id)}>
          <Heart />
        </Button>
      </ContentContainer>

      <p>{`${price} SEK`}</p>
    </CardContainer>
  );
};
