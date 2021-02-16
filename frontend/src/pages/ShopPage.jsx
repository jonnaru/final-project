import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { createClient } from "contentful";

import { PageContainer } from "./styling/PageContainer";
import { ShopCard } from "./styling/ShopCard";
import { DropDown } from "../components/DropDown";

const ShopContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const ItemCard = styled(ShopCard)`
  width: 25%;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const client = createClient({
  space: "u1hj1odlv53m",
  accessToken: "1TRVfQyDn_PgHJtYsjYqeBAg8hfo5bIATKK_MBsFHYU",
});

export const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState();
  // const [page, setPage] = useState(1)

  // onClick={() => setPage((prev) => prev + 1)}
  // onClick={() => setPage((prev) => prev - 1)}

  // make thunk
  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
        limit: 40,
        skip: 0,
      })
      .then((data) => {
        setProducts(data.items);
        setCategories(data.includes.Entry);
        console.log("data:", data);
        console.log("items:", data.items);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const filterProducts = (productsToFilter) => {
    if (!categoryFilter) return productsToFilter;
    return productsToFilter.filter(
      (product) => product.fields.categories[0].fields.title === categoryFilter
    );
  };

  return (
    <PageContainer>
      <DropDown categories={categories} setCategoryFilter={setCategoryFilter} />

      <ShopContainer>
        {filterProducts(products).map((product) => (
          <ItemCard
            key={product.sys.id}
            id={product.sys.id}
            coverImage={`http:${product.fields.thumb.fields.file.url}`}
            title={product.fields.productName}
            price={product.fields.price}
            quantity={product.fields.quantity}
            sample={product.fields.sample}
          />
        ))}
      </ShopContainer>
    </PageContainer>
  );
};
