import React, { useState } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { handleLikeThunk } from "../../reducers/user";

import { IconHeart } from "../../lib/IconHeart";
import { Dialog } from "../../lib/Dialog";
// import { useTooltip } from "../../lib/Tooltip";

const Container = styled.article`
  position: relative;
  width: 25%;
  background: #fff;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 667px) {
    width: 100%;
  }

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
    transition: 0.1s ease-out;
  }

  @media (max-width: 667px) {
    &:hover img {
      opacity: 1;
    }
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

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;

const Heart = styled(IconHeart)`
  padding-top: 6px;
  transition: 0.1s;

  & .cls-1 {
    fill: ${(props) => props.liked && "#000"};
  }

  & .cls-2 {
    fill: ${(props) => props.liked && "#000"};
  }
`;

const TextFlag = styled.span`
  position: absolute;
  z-index: 5;
  right: 0;
  margin-top: 12px;
  margin-right: 10px;
  padding: 3px 10px 4px 10px;

  font-size: 18px;
  text-align: right;
  font-style: italic;

  background: ${(props) => (props.sample ? "#fff" : "#000")};
  color: ${(props) => (props.sample ? "#000" : "#fff")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ShopCard = (props) => {
  const { title, price, coverImage, className, quantity, id, sample } = props;

  const [showLikeAlert, setShowLikeAlert] = useState(false);

  const accessToken = useSelector((store) => store.user.login.accessToken);
  const likes = useSelector((store) => store.user.likes);

  const dispatch = useDispatch();

  const handleLike = (id) => {
    if (accessToken) {
      dispatch(handleLikeThunk(id));
    } else {
      setShowLikeAlert(true);
    }

    console.log("Liked", id);
  };

  // const ref = useTooltip("sign in to like", {});

  return (
    <>
      {showLikeAlert && (
        <Dialog
          title="Sign in to like"
          buttonText="ok"
          onClose={() => setShowLikeAlert(false)}
        />
      )}
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
            <Button>
              <Heart
                liked={likes?.includes(id)}
                onClick={() => handleLike(id)}
              />
            </Button>
          </TitleBar>
          <p>{`${price} SEK`}</p>
        </Content>
      </Container>
    </>
  );
};
