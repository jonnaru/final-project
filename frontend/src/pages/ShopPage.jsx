import React, { useEffect, useState } from "react";

import { getItems } from "../shared/getItems";

import { DropDown } from "../components/DropDown";
import { PageContainer } from "./styling/PageContainer";
import { ShopCard } from "./styling/ShopCard";
import { ShopPageContainer } from "./styling/ShopPageContainer";

export const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState();

  useEffect(() => {
    getItems(setProducts, setCategories);
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
