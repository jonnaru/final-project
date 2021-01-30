import React from "react";
import { createClient } from "contentful";

import { PageContainer } from "./styling/PageContainer";

const client = createClient({
  space: "u1hj1odlv53m",
  accessToken: "1TRVfQyDn_PgHJtYsjYqeBAg8hfo5bIATKK_MBsFHYU",
});

const id = "j1eHI57qmhu2NPRlbDMXB";

export const ContactPage = () => {
  client
    .getEntries({
      content_type: "product",
      limit: 20,
      skip: 0,
    })
    // .then((entries) => (entries.items.length > 0 ? entries.items : []))
    .then((data) => {
      console.log("data", data);
    })
    .catch((error) => {
      console.log(error);
    });

  client.getEntry(id).then((item) => {
    console.log("item from id", item);
  });

  return (
    <PageContainer>
      <h1>This is a contact page</h1>
    </PageContainer>
  );
};
