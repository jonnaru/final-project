import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ui } from "../reducers/ui";
import { getItem } from "../shared/getItem";

import { PageContainer } from "./styling/PageContainer";
import { ProductPageContainer } from "./styling/ProductPageContainer";
import { ProductCard } from "./styling/ProductCard";
import { ProductPageImage } from "./styling/ProductPageImage";
import { PrimaryButton } from "../lib/PrimaryButton";
import { IconArrow } from "../lib/IconArrow";

export const ProductPage = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const { setIsLoading } = ui.actions;

  const handleLoadingChange = (loading) => {
    dispatch(setIsLoading(loading));
  };

  useEffect(() => {
    getItem(id, setProduct, handleLoadingChange);
  }, [id]);

  if (!product) return <></>; // show spinner

  return (
    <PageContainer>
      <ProductPageContainer>
        <picture>
          <img
            src={`https:${product.mainImage.fields.file.url}`}
            alt={product.mainImage.fields.title}
          />
        </picture>

        <article>
          <ProductCard product={product} />
          <div style={{ padding: "40px", textAlign: "right" }}>
            <PrimaryButton
              small
              icon={<IconArrow />}
              title="back"
              onClick={() => history.goBack()}
            />
          </div>
        </article>

        {product.images.map((image) => (
          <picture>
            <ProductPageImage
              src={`https:${image.fields.file.url}`}
              alt={image.fields.title}
            />
          </picture>
        ))}
      </ProductPageContainer>
    </PageContainer>
  );
};
