import React from "react";

import { PageContainer } from "./styling/PageContainer";
import { ContactPageContainer } from "./styling/ContactPageContainer";

export const ContactPage = () => {
  return (
    <PageContainer>
      <ContactPageContainer>
        <h3>EMAIL</h3>
        <a href="mailto:hello@drejad.studios" target="_blank" rel="noreferrer">
          <p>hello@drejad.studio</p>
        </a>
        <h3>INSTAGRAM</h3>

        <a
          href="https://www.instagram.com/drejad.studio/"
          target="_blank"
          rel="noreferrer"
        >
          <p>@drejad.studio</p>
        </a>
      </ContactPageContainer>
    </PageContainer>
  );
};
