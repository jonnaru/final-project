import React from "react";
import styled from "styled-components/macro";

const CustomLink = styled.a`
  display: block;
  background: none;
  border: none;
  outline: none;
  text-align: center;
  padding: 0;

  font-size: 16px;
  color: #000;
  text-decoration: underline;
  font-family: Arial, Helvetica, sans-serif;

  cursor: pointer;

  &:hover {
    color: #6b6b6b;
    text-decoration: none;
  }
`;

export const Link = ({ title, href }) => {
  return (
    <CustomLink href={href} target="_blank" rel="noreferrer">
      {title}
    </CustomLink>
  );
};
