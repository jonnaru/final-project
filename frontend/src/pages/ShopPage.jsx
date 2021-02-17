import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

import { DropDown } from "../components/DropDown";
import { PageContainer } from "./styling/PageContainer";
import { ShopCard } from "./styling/ShopCard";
import { ShopPageContainer } from "./styling/ShopPageContainer";

// to thunk
const client = createClient({
  space: "u1hj1odlv53m",
  accessToken: "1TRVfQyDn_PgHJtYsjYqeBAg8hfo5bIATKK_MBsFHYU",
});

export const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState();

  // make thunk
  useEffect(() => {
    // to thunk
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
      <ShopPageContainer>
        <DropDown
          categories={categories}
          setCategoryFilter={setCategoryFilter}
        />
        {filterProducts(products).map((product) => (
          <ShopCard
            key={product.sys.id}
            id={product.sys.id}
            coverImage={`http:${product.fields.thumb.fields.file.url}`}
            title={product.fields.productName}
            price={product.fields.price}
            quantity={product.fields.quantity}
            sample={product.fields.sample}
          />
        ))}
      </ShopPageContainer>
    </PageContainer>
  );
};
