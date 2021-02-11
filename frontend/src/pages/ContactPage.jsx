import React from "react";
import styled from "styled-components/macro";

// import { useTooltip } from "../lib/Tooltip";
import { PageContainer } from "./styling/PageContainer";
import { ContactPageContainer } from "./styling/ContactPageContainer";

const Link = styled.a`
  &:hover {
    text-decoration: none;
    color: #ccc;
  }
`;

export const ContactPage = () => {
  //   const ref = useTooltip("sign in to like", {});

  return (
    <PageContainer>
      <ContactPageContainer>
        {/* <Text ref={ref}>This is a contact page</Text> */}
        <h3>EMAIL</h3>
        <Link
          href="mailto:hello@drejad.studios"
          target="_blank"
          rel="noreferrer"
        >
          <p>hello@drejad.studio</p>
        </Link>
        <h3>INSTAGRAM</h3>

        <Link
          href="https://www.instagram.com/drejad.studio/"
          target="_blank"
          rel="noreferrer"
        >
          <p>@drejad.studio</p>
        </Link>
      </ContactPageContainer>
    </PageContainer>
  );
};
