import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ui } from "../reducers/ui";
import { getItems } from "../shared/getItems";

import { DropDown } from "../components/DropDown";
import { PageContainer } from "./styling/PageContainer";
import { ShopCard } from "./styling/ShopCard";
import { ShopPageContainer } from "./styling/ShopPageContainer";

export const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState();

  const dispatch = useDispatch();
  const { setIsLoading } = ui.actions;

  const handleLoadingChange = (loading) => {
    dispatch(setIsLoading(loading));
  };

  useEffect(() => {
    getItems(setProducts, setCategories, handleLoadingChange);
  }, []);

  const filterProducts = (productsToFilter) => {
    productsToFilter = productsToFilter.sort((a, b) => {
      if (a.fields.sort > b.fields.sort) return -1;
      if (a.fields.sort < b.fields.sort) return 1;
      return 0;
    });
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
            coverImage={`http:${product.fields.thumb.fields?.file?.url}`}
            title={product.fields.productName}
            price={product.fields.price}
            quantity={product.fields.quantity}
            sample={product.fields.sample}
            sale={product.fields.sale}
          />
        ))}
      </ShopPageContainer>
    </PageContainer>
  );
};
