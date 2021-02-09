import React from "react";
import styled from "styled-components/macro";

import { useTooltip } from "../lib/Tooltip";
import { PageContainer } from "./styling/PageContainer";

const Text = styled.h1`
  display: inline;
`;

export const ContactPage = () => {
  const ref = useTooltip("sign in to like", {});

  return (
    <PageContainer>
      <Text ref={ref}>This is a contact page</Text>
      {/* <h1 ref={ref}>This is a contact page</h1> */}
    </PageContainer>
  );
};
