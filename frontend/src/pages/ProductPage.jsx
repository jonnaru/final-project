import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { PageContainer } from "./styling/PageContainer";
import { ProductPageContainer } from "./styling/ProductPageContainer";
import { ProductCard } from "../lib/ProductCard";
import { PrimaryButton } from "../lib/PrimaryButton";
import { IconArrow } from "../lib/IconArrow";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

export const ProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState();

  useEffect(() => {
    client
      .getEntry(id)
      .then((item) => {
        console.log("item product page", item.fields);
        setProduct(item.fields);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id]);

  if (!product) return <></>; // show spinner

  return (
    <PageContainer>
      <ProductPageContainer>
        <article>
          <img
            src={`http:${product.image[0].fields.file.url}`}
            alt={product.image[0].fields.title}
          />
        </article>

        <article>
          <ProductCard
            itemTitle={product.productName}
            price={product.price}
            color={product.color}
            measurements={product.size}
            quantity={product.quantity}
            description={product.productDescription}
            materialCare={product.materialCare}
            sample={product.sample}
          />
          <div style={{ padding: "40px", textAlign: "right" }}>
            <PrimaryButton
              small
              icon={<IconArrow />}
              title="back"
              onClick={() => history.goBack()}
            />
          </div>
        </article>

        {product.image.slice(1).map((item) => (
          <article>
            <img
              style={{ height: "500px" }}
              src={`http:${item.fields.file.url}`}
              alt={item.fields.title}
            />
          </article>
        ))}
      </ProductPageContainer>
    </PageContainer>
  );
};
