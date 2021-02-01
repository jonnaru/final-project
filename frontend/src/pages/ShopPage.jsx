import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { createClient } from "contentful";

import { PageContainer } from "./styling/PageContainer";
import { ShopCard } from "../lib/ShopCard";

const ShopContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const ItemCard = styled(ShopCard)`
  width: 25%;
`;

const client = createClient({
  space: "u1hj1odlv53m",
  accessToken: "1TRVfQyDn_PgHJtYsjYqeBAg8hfo5bIATKK_MBsFHYU",
});

export const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
        limit: 20,
        skip: 0,
      })
      .then((data) => {
        setProducts(data.items);
        console.log(data.items);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <PageContainer>
      <ShopContainer>
        {products?.map((product) => (
          <ItemCard
            key={product.sys.id}
            id={product.sys.id}
            coverImage={`http:${product.fields.thumb.fields.file.url}`}
            title={product.fields.productName}
            secondaryText={product.fields.price}
            quantity={product.fields.quantity}
            sample={product.fields.sample}
          />
        ))}
      </ShopContainer>
    </PageContainer>
  );
};
